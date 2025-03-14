import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {

    const { data, error } = await supabase
        .from('cabins')
        .select('*');

    if (error) {
        console.log(error)
        throw new Error('cabins could not be loaded')
    }
    return data
}




//https://banapgytkdybwboctodh.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg
export async function createEditCabin(newCabin, id) {
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '')

    const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images//${imageName}`


    //create/edit cabin
    let query = supabase.from('cabins')
    //create
    if (!id)
        query =
            query.insert([
                // { some_column: 'someValue', other_column: 'otherValue' },
                { ...newCabin, image: imagePath }
            ])
    //edit
    if (id)
        query = query.update({ ...newCabin, image: imagePath })
            .eq('id', id)

    const { data, error } = await query.select().single();

    if (error) {
        console.log(error)
        throw new Error('cabins could not be created')
    }

    // upload image
    if (hasImagePath) return data;
    const { error: storageError } = await supabase
        .storage
        .from('cabin-images')
        .upload(imageName, newCabin.image)

    //delete the cabin IF there was an error uploading image

    if (storageError) {
        await supabase
            .from('cabins')
            .delete()
            .eq('id', data.id);

        console.log(storageError)
        throw new Error('cabin image could not be uploaded and the cabin was created')
    }




    return data

}


export async function deleteCabin(id) {
    const { data, error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id);

    if (error) {
        console.log(error)
        throw new Error('cabins could not be deleted')
    }
    return data
}