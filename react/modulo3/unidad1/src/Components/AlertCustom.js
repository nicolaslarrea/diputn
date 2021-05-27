import { Alert } from 'react-bootstrap'

//Se usan así los estilos en React.
const styles={
    alert:{
        marginTop:"10px"
    }
}

function AlertCustom(props) {
  const { variant, text } = props

  return(
    <Alert variant={ variant } style={ styles.alert } >
      { text }
    </Alert>
  )
}

export default AlertCustom
