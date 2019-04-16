import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class TextInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: ''
    }

    this.currentValue = '';
  }

  onChange(evt) {

    this.currentValue = evt.target.value;

    this.checkError();

    if (this.props.onChange) {
      this.props.onChange(evt);
    }
  }

  onBlur(param) {
    this.checkError(param.target.value)
  }

  checkError() {
    if (!this.currentValue && this.props.required) {
      this.setState({ error: <label>Поле <b>{this.props.label}</b> обязательно для заполнения</label> });
      return false;
    } else {
      this.setState({ error: '' });
      return true;
    }
  }

  render() {

    let maskComponent;
    if (this.props.mask && this.props.mask.length) {
      maskComponent = (
        
      )
    }

    return (
      <TextField
        error={!!this.state.error}
        label={this.props.label}
        placeholder={this.props.placeholder}
        style={{ margin: 8 }}
        helperText={this.state.error}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={this.onChange.bind(this)}
        onBlur={this.onBlur.bind(this)}
      />
    );
  }
}

export default TextInput;