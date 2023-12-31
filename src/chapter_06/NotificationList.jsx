import React from "react";
import Notification from "./notification";

const reservedNotifications = [
    {
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        message: "점심식사 시간입니다.",
    },
    {
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

var Timer;
//notification을 목록 형태로 보여주기 위한 component
class NotificationList extends React.Component{
    constructor(props) {
        super(props);

        this.state ={
            notifications: [], //생성자에서는 앞으로 사용할 데이터를 state에 넣어서 초기화
        };
    }

    componentDidMount(){
        const { notifications } =this.state;
        Timer = setInterval(() =>{
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({ //used to update state
                    notifications: notifications,
                });
            } else {
                clearInterval(Timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) =>{
                    return <Notification message={notification.message} />;
                })}
            </div>
        );
    }
}

export default NotificationList;