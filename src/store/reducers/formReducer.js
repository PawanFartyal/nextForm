import { ADD_DATA } from "../actions/formAction";

const initialState = {
    formData: {},
  };
const formReducer = (state=initialState,action)=>{
    switch(action.type) {
        case ADD_DATA: {
            return {formData:action.payload};
        }
    }   
}

export {formReducer} ;