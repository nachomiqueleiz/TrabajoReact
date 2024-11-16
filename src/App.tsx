import './App.css'
import { AppProduct } from './components/AppProduct/AppProduct'

export const App = () => {


  return (
      <div style= {{display: "flex", flexDirection: "column",gap: "1rem"}}>
          {/* <MiPrimerComponent
              text="Hola mundo"
              color="red"
              fontSize={2} />
          <ComponentCounter />
          <ComponentUseEffect /> */}
          {/* <FormComponent /> */}
          <AppProduct />  
      </div>
  )
}