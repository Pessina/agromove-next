import React, { Component } from 'react';
import { Container, Form } from 'semantic-ui-react';
import { styleCenter, handleClickButtonForms } from '../utils/utils';

export default class Contact extends Component {
  style= {
    button: {
      color: '#FFFFFF',
      width: '250px'
    }
  }

  formId = 'formEmail-Contact'

  render() {
    const {
      subtitle
    } = this.props;

    return (
      <div className="Contact" style={{ ...styleCenter }}>
        <Container text centered textAlign="center">
          <h2>Gostou da Agromove e quer ter a melhor ferramenta de análise de mercado para sua fazenda?</h2>
          <p>Entre em contato conosco agora e conheça nossos planos.</p>
          <Form id={this.formId}>
            <p>{subtitle}</p>
            <Form.Field style={{ padding: '3% 6%' }}>
              <input placeholder="Email" type="email" id="email" required />
            </Form.Field>
            <Form.Button
              style={{ backgroundColor: '#2E6B34', ...this.style.button }}
              onClick={() => { handleClickButtonForms('Contact-Falar Consultor', this.formId, 'consult'); }}
            >
              Quero falar com um consultor
            </Form.Button>
            <small>*Falar com o consultor sem compromisso, gratuitamente</small>
          </Form>
        </Container>
      </div>
    );
  }
}
