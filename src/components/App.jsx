import React from "react";
import { ContactList } from "./ContactList";
import { Box } from "./Box";
import { FormikContactForm } from "./FormikContactForm/FormikContactForm";
import { GlobalStyle } from "GlobalStyle";
import { Field2 } from './Filter2/Filter2';


export const App = () => {

  return (<>
    <Box
      m={4}
      p={4}
      height="100vh"
      bg='#f6f6f6'
      maxWidth='700px'
      ml='auto'
      mr='auto'
    ><GlobalStyle />
      <FormikContactForm/>
      <ContactList>
        <Field2 />
      </ContactList>
    </Box>
  </>
  )
}