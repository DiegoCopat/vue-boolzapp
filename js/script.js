var app= new Vue ({

    el: "#root",
    data: {
        contacts: [
            {
                name: "Michele",
                avatar: "_1",
                visible: true,
                active: false,
                messages: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Hai portato a spasso il cane?",
                        status: "sent"
                    },
                    {
                        date: "10/01/2020 15:50:00",
                        text: "Ricordati di dargli da mangiare",
                        status: "sent"
                    },
                    {
                        date: "10/01/2020 16:15:22",
                        text: "Tutto fatto!",
                        status: "received"
                    }
                ],
            },
            {
                name: "Fabio",
                avatar: "_2",
                visible: true,
                active: false,
                messages: [
                    {
                        date: "20/03/2020 16:30:00",
                        text: "Ciao come stai?",
                        status: "sent"
                    },
                    {
                        date: "20/03/2020 16:30:55",
                        text: "Bene grazie! Stasera ci vediamo?",
                        status: "received"
                    },
                    {
                        date: "20/03/2020 16:35:00",
                        text: "Mi piacerebbe ma devo andare a fare la spesa.",
                        status: "sent"
                    }
                ],
            },
            {
                name: "Samuele",
                avatar: "_3",
                visible: true,
                active: false,
                messages: [
                    {
                        date: "28/03/2020 10:10:40",
                        text: "La Marianna va in campagna",
                        status: "received"
                    },
                    {
                        date: "28/03/2020 10:20:10",
                        text: "Sicuro di non aver sbagliato chat?",
                        status: "sent"
                    },
                    {
                        date: "28/03/2020 16:15:22",
                        text: "Ah scusa!",
                        status: "received"
                    }
                ],
            },
            {
                name: "Luisa",
                avatar: "_4",
                visible: true,
                active: false,
                messages: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Lo sai che ha aperto una nuova pizzeria?",
                        status: "sent"
                    },
                    {
                        date: "10/01/2020 15:50:00",
                        text: "Si, ma preferirei andare al cinema",
                        status: "received"
                    }
                ],
            }
        ],
        userNumber: 0,
        newMessage: "",
        searchName: "",
        hidden: true,
        style: ""
    },
    methods: {
        getSrcUsersImage: function(userIndex) {
            return `img/avatar${this.contacts[userIndex].avatar}.jpg`;
        },
        getUsersName: function(userIndex) {
            return this.contacts[userIndex].name;
        }, 
        getLastMessage: function(userIndex) {
            const lastMessage = this.contacts[userIndex].messages[this.contacts[userIndex].messages.length - 1].text;
            return `${lastMessage.substring(0, 20)}...`;
        },
        getUserActive: function(userIndex) {
            this.userNumber = userIndex;
        },
        getLastDate: function(userIndex) {
            const messages = this.contacts[userIndex].messages;
            return messages[messages.length - 1].date;
        },
        addMessage: function() {
            console.log(this.newMessage);
            this.contacts[this.userNumber].messages.push(
                {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: this.newMessage,
                    status: "sent"
                }
            );
            this.newMessage = "";
            setTimeout(() => {
                this.contacts[this.userNumber].messages.push(
                    {
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: "ok",
                        status: "received"
                    }
                );
            }, 1000);
        },
        searchUser: function() {
     
            this.contacts.map(
                (contact) => {
                    const name = contact.name;
                    console.log(name);
                    const search = this.searchName;
                    console.log(search);
                    const verify = name.toLowerCase().includes(search.toLowerCase()) ? true : false ;

                    // console.log(verify);
                    
                    if (verify == !true) {
                        contact.visible = "hidden";
                        this.style = "'display:none;'";
                        console.log(this.style);
                    };
                    this.hidden = contact.visible;
                    // console.log(contact.visible)
                    console.log(this.hidden);
                }   
            );
            this.searchName = "";
        }
       
    }
});




