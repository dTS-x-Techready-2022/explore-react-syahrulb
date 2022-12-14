import PropTypes from 'prop-types'
import InputAdornment from '@material-ui/core/InputAdornment'
import { Search as SearchIcon, Error as ErrorIcon } from '@material-ui/icons'
import { TextField, Tooltip } from '@material-ui/core'
import { Box, ErrorBadge, IconButtonStyled } from './styles'

const Input = ({ className, type, name, onChange, onBlur, errors, value, touched, placeholder, label }) => {
  function isErrorIcon() {
    if (!errors) {
      return false
    }
    return (
      <Tooltip title={errors || ''}>
        <IconButtonStyled>
          <ErrorBadge position='end'>
            <ErrorIcon color='error' />
          </ErrorBadge>
        </IconButtonStyled>
      </Tooltip>
    )
  }

  return (
    <Box>
      <TextField
        className={className}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        label={label}
        error={!!touched && !!errors}
        value={value}
        fullWidth
        placeholder={placeholder}
        variant='outlined'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: isErrorIcon()
        }}
      />
    </Box>
  )
}
Input.propTypes = {
  className: PropTypes.any,
  type: PropTypes.any,
  name: PropTypes.any,
  onChange: PropTypes.any,
  onBlur: PropTypes.any,
  errors: PropTypes.any,
  value: PropTypes.any,
  touched: PropTypes.any,
  placeholder: PropTypes.any,
  label: PropTypes.any
}
export default Input
