const ADD_DATA = "ADD_DATA" 
const saveFormData =(item)=>({
    type:ADD_DATA,
    payload:item,
})

export {saveFormData,ADD_DATA} ;