import React from "react";

class ConfirmButton extends React.Component {
    constructor(props){
        super(props);

        this.state ={ //화인여부 저장
            isConfirmed: false,
        };

        //this.handleConfirm = this.handleConfirm.bind(this); //this is for bind
    }

    handleConfirm = () => { //onClick event 처리
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            <button 
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
                >
                    {this.state.isConfirmed ? "확인됨" : "확인하기"}
                </button>
        );
    }
}

export default ConfirmButton;