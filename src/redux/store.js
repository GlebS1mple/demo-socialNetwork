import mainReducer from "./main-reducer";
import messengerReducer from "./messenger-reducer";

let store = {
    _state: {
        messenger: {
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "Bye" },
                { id: 3, message: "First" },
                { id: 4, message: "Second" },
            ],
            newMessageText: '',
            chats: [
                { id: 1, name: "Gleb", srcimg: "1.png" },
                { id: 2, name: "Ivan", srcimg: "2.png" },
                { id: 3, name: "Julia", srcimg: "3.png" },
                { id: 4, name: "Lena", srcimg: "4.png" },
            ],
        },
        main: {
            contacts: [
                { id: 1, name: "Cierra Vega", srcimg: "1.png" },
                { id: 2, name: "Alden Cantrell", srcimg: "2.png" },
                { id: 3, name: "Kierra Gentry", srcimg: "3.png" },
                { id: 4, name: "Bradyn Kramer", srcimg: "4.png" },
                { id: 5, name: "Thomas Crane", srcimg: "5.png" },
                { id: 6, name: "Miranda Shaffer", srcimg: "6.png" },
                { id: 7, name: "Pierre Cox", srcimg: "7.png" },
                { id: 8, name: "Alvaro Mcgee", srcimg: "8.png" },
            ],
            posts: [
                { id: 1, message: "Being a father is sometimes my hardest but always my most rewarding job. Happy Father’s Day to all dads out there. ", name: "Thomas Ben", lastseen: "45 mins ago", likes: 22, comments: 5, shares: 7, srcimg: "1.png" },
                { id: 2, message: "Having fun while cooking and eating variety of foods with @Sarah", name: "Miranda Shaffer", lastseen: "June 21, 12:45 pm", likes: 12, comments: 1, shares: 4, srcimg: "2.png" },
                { id: 3, message: "Hi, I am Ivan - professional footbal player", name: "David Cox", lastseen: "5 mins ago", likes: 10, comments: 2, shares: 3, srcimg: "3.png" },
            ],
            newPostText: '',
            events: [
                { id: 1, name: "Pop Corn", text: "Start watching with friends and family.", what: "watching now", btn: "Watch Now", friends: "35 friends", srcimg: "1.png" },
                { id: 2, name: "Events", text: "Join events near you for free.", what: "going", btn: "Explore All", friends: "14 friends", srcimg: "2.png" },
            ],
            walls: [
                { name: "Pierre Cox", id: 1, srcimg: "1.png" },
                { name: "Bradyn Kramer", id: 2, srcimg: "2.png" },
                { name: "Kierra Gentry", id: 3, srcimg: "3.png" }
            ],
            who: [
                { id: 1, name: "Thomas Ben", srcimg: "1.png" },
                { id: 2, name: "Sarah Pierre", srcimg: "2.png" }
            ],
        },
    },
    _callSubscriber() {
        console.log("treeischanged");
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.messenger = messengerReducer(this._state.messenger, action);
        this._state.main = mainReducer(this._state.main, action);
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export default store;

