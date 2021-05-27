import { Button, Spinner } from 'react-bootstrap'

function ButtonWithLoading(props) {
  const { variant, type, loading } = props

  return(
    <Button type={ type || "submit"} variant={ variant || "primary" } disabled={ loading }>
      { props.children }
      {
        loading &&
        <Spinner animation="border" size="sm"/>
      }
    </Button>
  )
}

export default ButtonWithLoading
