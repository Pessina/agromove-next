import React, { Component } from 'react';
import {
  Container, Form
} from 'semantic-ui-react';
import { styleCenter, handleClickButtonForms } from '../utils/utils';


export default class MainSection extends Component {
  style= {
    button: {
      color: '#FFFFFF',
      width: '250px'
    }
  }

  formId = 'formEmail-MainSection'

  render() {
    const {
      title,
      subtitle
    } = this.props;

    return (
      <div className="MainSection" style={{ ...styleCenter }}>
        <Container text centered textAlign="center">
          <h1>{title}</h1>
          <Form id={this.formId}>
            <p>{subtitle}</p>
            <div style={{ height: '0px' }}>
              <Form.Input type="hidden" id="token_rdstation" name="token_rdstation" value="515c24c672fad7174004a058136dbbb0" />
              <Form.Input type="hidden" id="identificador" name="identificador" value="Home Forms" />
            </div>
            <Form.Field style={{ padding: '3% 6%' }}>
              <input placeholder="Email" type="email" id="email" required />
            </Form.Field>
            <Form.Button
              style={{ backgroundColor: '#2E6B34', ...this.style.button }}
              onClick={() => { handleClickButtonForms('MainSection-Falar Consultor', this.formId, 'consult'); }}
            >
               Quero falar com um consultor
            </Form.Button>
            <small>*Sem compromisso, gratuitamente</small>
          </Form>
        </Container>
      </div>
    );
  }
}
