import React from 'react';
import * as typeformEmbed from '@typeform/embed'

class TelForm extends React.Component {
  constructor(props) {
    super(props);
    this.el = null;
  }
  componentDidMount() {    
    if (this.el) {
      typeformEmbed.makeWidget(this.el, "https://rayh340597.typeform.com/to/lFMHtHl4", {
        hideFooter: true,
        hideHeaders: true,
        opacity: 0
      });
    }
  }
  render() {
    return (
      <div ref={(el) => this.el = el} style={{width: '100%', height: '600px'}} />
    )
  }
}

export default TelForm;