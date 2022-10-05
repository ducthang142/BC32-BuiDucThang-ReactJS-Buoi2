import React, { Component } from "react";
import dataGlasses from "./dataGlasses.json";
import GlassesDetail from "./GlassesDetail";
import GlassesList from "./GlassesList";

export default class Tryglassapp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGlass: null,
    };
  }

  handleSelect = (glass) => {
    this.setState({ selectedGlass: glass });
  };

  render() {
    return (
      <div>
        <h1 className="text-light bg-dark text-center">TRY GLASS APP ONLINE</h1>

        {/* <div className="container">
          <div className="m-5">
            <img src="./glassesImage/model.jpg" alt="model.jpg" />
          </div>

          <div className="p-5">
            <GlassesList glasses={dataGlasses} />
          </div>
        </div> */}

        <div class="container vglasses py-3">
          <div class="row  justify-content-between">
            <div class="col-6 vglasses__left">
              <div class="row">
                <div class="col-12">
                  <h1 class="mb-2 text-primary">Glass Detail</h1>
                </div>
              </div>
              <div id="vglassesList">
                <GlassesDetail glass={this.state.selectedGlass} />
              </div>
            </div>

            <div class="col-5 vglasses__right p-0">
              <div class="vglasses__card">
                <div class="vglasses__model" id="avatar">
                  <GlassesDetail glass={this.state.selectedGlass} />
                </div>
              </div>
            </div>
          </div>

          <div className="my-5 vglasses__left">
            <GlassesList glasses={dataGlasses} onSelect={this.handleSelect} />
          </div>
        </div>
      </div>
    );
  }
}
