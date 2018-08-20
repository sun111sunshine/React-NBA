import React,{Component} from 'react';
import $ from 'jquery';

import './playerCard.less';

class PlayerCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            getInfoFinished:false,
            playerCardInfo:{}
        }
    }
    getPlaerCardInfo(){
        const url="http://matchweb.sports.qq.com/player/baseInfo?playerId="+ this.props.playerId +"&from=h5&_=1534582161888&callback=?";
        $.getJSON(url,(res)=>{
            this.setState({
                getInfoFinished:true,
                playerCardInfo:res.data
            })
        })
    }
    componentDidMount(){
        this.getPlaerCardInfo();
    }
    render(){
        let cardWarp = null;
        if(this.state.getInfoFinished){
            const cardInfo = this.state.playerCardInfo;
            cardWarp = (
                <div className="player-card-warp">
                    <div className="left">
                        <img className="playerImg" src={cardInfo.logo} />
                        <div className="baseInfo">
                            <h3>{cardInfo.cnName}</h3>
                            <p>{cardInfo.position}|{cardInfo.jerseyNum}号</p>
                        </div>
                    </div>
                    <div className="right">
                        <img className="teamLogo" src={cardInfo.teamLogo} />
                        <span>{cardInfo.teamName}</span>
                    </div>
                </div>
            )
        }
        return(
            <React.Fragment>
                {cardWarp}
            </React.Fragment>
        )
    }
}

export default PlayerCard;