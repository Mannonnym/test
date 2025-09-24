export const getNote = (req,res)=>{
    res.status(200).send("you got 20 notes");
}
export const createNote=(req,res)=>{
    res.status(201).json({message:"note created succefully!"});
}
export const updateNote=(req,res)=>{
    res.status(200).json({message:"note updated succefully!"});
}
export const deleteNote =(req,res)=>{
    res.status(200).json({message:"note deleted succefully!"});
}