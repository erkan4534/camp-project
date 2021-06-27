import React from 'react';
import {ErrorMessage, Field, useField} from "formik";
import {FormField, Label} from "semantic-ui-react";

function KodlamaloTextInput({...props}) {
    //console.log(props);
    //reflect api
    const [field,meta]=useField(props)
    //console.log(field);
    //console.log(meta);

    return (
       <div>
           <FormField error={meta.touched && !!meta.error}>
               <input {...field} {...props} />
               {meta.touched && !!meta.error?(
                   <Label pointing basic color="red" content={meta.error}></Label>
               ):null}
           </FormField>
       </div>
    )
}

export default KodlamaloTextInput;
