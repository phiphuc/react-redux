import React, { Component } from 'react';

class NodeList extends Component {
    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    <div className="card">
                    <div className="card-header" role="tab" id="note1">
                        <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href="#note1Content" aria-expanded="true" aria-controls="note1">
                            Ghi chu ngay 14/05/2019
                        </a>
                        </h5>
                    </div>
                    <div id="note1Content" className="collapse in" role="tabpanel" aria-labelledby="note1">
                        <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur laboriosam voluptatibus quam tempore exercitationem? Provident sit asperiores fugit ab quibusdam et, eveniet totam atque maiores sapiente, modi quaerat mollitia similique.
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NodeList;