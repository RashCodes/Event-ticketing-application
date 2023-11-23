"use strict";
exports.id = 158;
exports.ids = [158];
exports.modules = {

/***/ 6375:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I8": () => (/* binding */ auth),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "tO": () => (/* binding */ storage)
/* harmony export */ });
/* unused harmony export provider */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const firebaseConfig = {
    apiKey: "AIzaSyCiTxiWzxAOndzpeNyy3TuLeT9bxnM0ra4",
    authDomain: "eventtiz.firebaseapp.com",
    projectId: "eventtiz",
    storageBucket: "eventtiz.appspot.com",
    messagingSenderId: "600043838110",
    appId: "1:600043838110:web:8e094eec1f41d6c353f98f",
    measurementId: "G-25R0S4XSE6"
};
// Initialize Firebase
let app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length === 0 ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)()[0];
const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.EmailAuthProvider();
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4158:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bt": () => (/* binding */ deleteEvent),
/* harmony export */   "Hu": () => (/* binding */ updateRegLink),
/* harmony export */   "LR": () => (/* binding */ firebaseLoginUser),
/* harmony export */   "LW": () => (/* binding */ registerAttendee),
/* harmony export */   "YZ": () => (/* binding */ convertTo12HourFormat),
/* harmony export */   "Zg": () => (/* binding */ firebaseLogOut),
/* harmony export */   "f1": () => (/* binding */ firebaseCreateUser),
/* harmony export */   "uV": () => (/* binding */ addEventToFirebase),
/* harmony export */   "vw": () => (/* binding */ getEvents)
/* harmony export */ });
/* unused harmony exports generateID, createSlug, successMessage, errorMessage */
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(401);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3590);
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5421);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6375);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7163);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emailjs_browser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, react_toastify__WEBPACK_IMPORTED_MODULE_1__, _firebase_storage__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_5__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, react_toastify__WEBPACK_IMPORTED_MODULE_1__, _firebase_storage__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const sendEmail = (name, email, title, time, date, note, description, passcode, flier_url, setSuccess, setLoading)=>{
    _emailjs_browser__WEBPACK_IMPORTED_MODULE_4___default().send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, {
        name,
        email,
        title,
        time: convertTo12HourFormat(time),
        date,
        note,
        description,
        passcode,
        flier_url
    }, process.env.NEXT_PUBLIC_API_KEY).then((result)=>{
        setLoading(false);
        setSuccess(true);
    }, (error)=>{
        alert(error.text);
    });
};
const generateID = ()=>Math.random().toString(36).substring(2, 10);
const createSlug = (sentence)=>{
    let slug = sentence.toLowerCase().trim();
    slug = slug.replace(/[^a-z0-9]+/g, "-");
    slug = slug.replace(/^-+|-+$/g, "");
    return slug;
};
const addEventToFirebase = async (id, title, date, time, venue, description, note, flier, router)=>{
    const docRef = await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.addDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, "events"), {
        user_id: id,
        title,
        date,
        time,
        venue,
        description,
        note,
        slug: createSlug(title),
        attendees: [],
        disableRegistration: false
    });
    const imageRef = (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* .storage */ .tO, `events/${docRef.id}/image`);
    if (flier !== null) {
        await (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_2__.uploadString)(imageRef, flier, "data_url").then(async ()=>{
            //👇🏻 Gets the image URL
            const downloadURL = await (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(imageRef);
            //👇🏻 Updates the docRef, by adding the logo URL to the document
            await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.updateDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, "events", docRef.id), {
                flier_url: downloadURL
            });
            //Alerts the user that the process was successful
            successMessage("Event created! \uD83C\uDF89");
            router.push("/dashboard");
        });
    } else {
        successMessage("Event created! \uD83C\uDF89");
        router.push("/dashboard");
    }
};
const successMessage = (message)=>{
    react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    });
};
const errorMessage = (message)=>{
    react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    });
};
const firebaseCreateUser = (email, password, router)=>{
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.createUserWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8, email, password).then((userCredential)=>{
        const user = userCredential.user;
        successMessage("Account created \uD83C\uDF89");
        router.push("/login");
    }).catch((error)=>{
        console.error(error);
        errorMessage("Account creation declined ❌");
    });
};
const firebaseLoginUser = (email, password, router)=>{
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8, email, password).then((userCredential)=>{
        const user = userCredential.user;
        successMessage("Authentication successful \uD83C\uDF89");
        router.push("/dashboard");
    }).catch((error)=>{
        console.error(error);
        errorMessage("Incorrect Email/Password ❌");
    });
};
const firebaseLogOut = (router)=>{
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8).then(()=>{
        successMessage("Logout successful! \uD83C\uDF89");
        router.push("/");
    }).catch((error)=>{
        errorMessage("Couldn't sign out ❌");
    });
};
const getEvents = (id, setEvents, setLoading)=>{
    try {
        const q = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.query)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, "events"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.where)("user_id", "==", id));
        const unsubscribe = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.onSnapshot)(q, (querySnapshot)=>{
            const firebaseEvents = [];
            querySnapshot.forEach((doc)=>{
                firebaseEvents.push({
                    data: doc.data(),
                    id: doc.id
                });
            });
            setEvents(firebaseEvents);
            setLoading(false);
            return ()=>unsubscribe();
        });
    } catch (error) {
        console.error(error);
    }
};
const convertTo12HourFormat = (time)=>{
    const [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? "pm" : "am";
    const hours12 = hours % 12 || 12;
    const formattedTime = `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    return `${formattedTime}${period}`;
};
const updateRegLink = async (id)=>{
    const number = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    const eventRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, "events", id);
    (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.updateDoc)(eventRef, {
        disableRegistration: true,
        slug: `expired-${number}`
    });
};
const registerAttendee = async (name, email, event_id, setSuccess, setLoading)=>{
    setLoading(true);
    const passcode = generateID();
    const eventRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, "events", event_id);
    const eventSnap = await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)(eventRef);
    let firebaseEvent = {};
    if (eventSnap.exists()) {
        firebaseEvent = eventSnap.data();
        const attendees = firebaseEvent.attendees;
        const result = attendees.filter((item)=>item.email === email);
        if (result.length === 0 && firebaseEvent.disableRegistration === false) {
            await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.updateDoc)(eventRef, {
                attendees: (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.arrayUnion)({
                    name,
                    email,
                    passcode
                })
            });
            const flierURL = firebaseEvent.flier_url ? firebaseEvent.flier_url : "No flier for this event";
            sendEmail(name, email, firebaseEvent.title, firebaseEvent.time, firebaseEvent.date, firebaseEvent.note, firebaseEvent.description, passcode, flierURL, setSuccess, setLoading);
        } else {
            setLoading(false);
            errorMessage("User already registered ❌");
        }
    }
};
const deleteEvent = async (id)=>{
    await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.deleteDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, "events", id));
    const imageRef = (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* .storage */ .tO, `events/${id}/image`);
    (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_2__.deleteObject)(imageRef).then(()=>{
        console.log("Deleted successfully");
    }).catch((error)=>{
        console.error("Image does not exist");
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;