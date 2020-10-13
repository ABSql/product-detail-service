import React from 'react';

const SloganDescription = ({selected}) => {

  const FeatureRender = () => {
    if (selected.features !== undefined) { 
      return (
        selected.features.map((feature) => (
        <div>
          <li><b>{feature.feature}</b></li>
          <li>✓ {feature.value}</li>
        </div>
        )
      )
    )} else {
      return (<div>Loading Features...</div>);
    };
  }

  return (
    <div class="container">
      <div id="slogan-section-kg">
        <div class="row">  
          <div class="col-sm-8">
            <div id="slogan-header-kg">
              <p><b>{selected.slogan}</b></p>
            </div>
            <div id="slogan-description-kg">
              {selected.description}
            </div>
          </div>
          <div class="col-sm-4">
            <div>
              { FeatureRender() }
            </div>
          </div>
        </div>
      </div>
    </div>
  )

};

export default SloganDescription;