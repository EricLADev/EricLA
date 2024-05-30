"use client"

import {motion} from "framer-motion";
import TextField from "@mui/material/TextField";
import {ErrorMessage} from "@hookform/error-message";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {Button, styled} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error"

import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {sendContactForm} from "@lib/api";

const ContactForm = () => {

    // maxCharacterCount for message textarea
    const [text, setText] = useState("");
    const maxCharacterCount = 300;

    // just put here for no repetition on the form
    const tailWErrorClassName = "text-red-700 text-xs bg-zinc-300 pt-1 pb-1 pl-2 pr-2 mt-1";

    // useForm
    const { register, handleSubmit, formState: { isSubmitted, isSubmitting,  isSubmitSuccessful, errors }, reset } = useForm();

    // multiple states for the form
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [buttonIsDisabled, setButtonIsDisabled] = useState(false);

    // messages
    const successMessage = "Message envoyé. Je reviens vers vous dès que possible."
    const errorMessage = "Désolé mais un problème est survenu, veuillez réessayer ultérieurement."

    // just a functionality for testing loading
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    // Submit function
    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            setButtonIsDisabled(true);
            await sleep(1000);
            await sendContactForm(data);
            setSuccess(true);
        } catch (error) {
            console.log(error.message);
            setError(true);
        }
    }

    useEffect(() => {
        if (isSubmitted) {
            setIsLoading(false);
            setButtonIsDisabled(false);
        }
        if (isSubmitSuccessful) {
            setButtonIsDisabled(true);
            reset();
        }
    }, [isSubmitted, isSubmitSuccessful, reset])

    const ContactButton = styled(Button)({
        width: '100%',
        boxShadow: 'none',
        textTransform: 'uppercase',
        fontSize: '.9rem',
        padding: '20px 20px 18px',
        border: '0 none',
        borderRadius: 0,
        lineHeight: 1.5,
        backgroundColor: '#1c1917',
        '&:hover': {
            backgroundColor: '#57534e',
            boxShadow: 'none',
        },
        '&:active': {
            backgroundColor: '#57534e',
        },
        '&:focus': {
            backgroundColor: '#57534e',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    });

    const loadingVariants = {
        nok: {
            zIndex: 0,
            opacity: 0,
            transition: {
                ease: [0, .65, .25, .95],
                duration: .35,
            }
        },
        ok: {
            zIndex: 10,
            opacity: 0.6,
            transition: {
                ease: [0, .65, .25, .95],
                duration: .35,
            }
        }
    };

    return (
        <Box
            sx={{
                '& .MuiInputLabel-root': { textTransform: 'uppercase', fontSize: '.7rem', marginTop: '-6px', marginLeft: '-3px' },
                '& .MuiFormLabel-root.Mui-focused': { color: '#c2410c'},
                '& .MuiInputLabel-asterisk': { color: '#c2410c', fontSize: '.85rem'},
                '& .MuiFilledInput-root': { backgroundColor: 'rgba(0, 0, 0, 0.02)'},
                '& .MuiFilledInput-underline:after': { borderColor: '#c2410c' },
                '& .MuiTextField-root': { width: '100%' },
                '& .MuiInputBase-input': { fontSize: '1.5rem', height: '4rem', fontWeight: '200' },
                '& .MuiInputBase-multiline': { paddingTop: '40px' },
            }}
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            className="relative"
            id="_contactForm"
        >
            <motion.div
                id="_loading-contact"
                className="absolute z-0 top-0 left-0 w-full h-full bg-zinc-400 opacity-0 flex justify-center items-center"
                initial={"nok"}
                animate={isLoading ? "ok" : "nok"}
                variants={loadingVariants}
            >
            </motion.div>
            <fieldset>
                <div className="pt-3">
                    <TextField required InputLabelProps={{ shrink: false }} disabled={isLoading} id="filled-basic" label="First Name" variant="filled"
                               inputProps={{maxLength: 40}} {...register("firstName", {
                        required: "This is required.",
                        maxLength: {value: 40, message: "40 letters max."}
                    })} />
                </div>
                <ErrorMessage
                    errors={errors}
                    name="firstName"
                    render={({message}) => <p className={tailWErrorClassName}>{message}</p>}
                />
                <div className="pt-3">
                    <TextField required InputLabelProps={{ shrink: false }} disabled={isLoading} id="filled-basic" label="Last Name" variant="filled"
                               inputProps={{maxLength: 40}} {...register("lastName", {
                        required: "This is required.",
                        maxLength: {value: 40, message: "40 letters max."}
                    })} />
                </div>
                <ErrorMessage
                    errors={errors}
                    name="lastName"
                    render={({message}) => <p className={tailWErrorClassName}>{message}</p>}
                />
                <div className="pt-3">
                    <TextField required InputLabelProps={{ shrink: false }} disabled={isLoading} id="filled-basic" label="Email" variant="filled"
                               inputProps={{maxLength: 50}} {...register("email", {
                        required: "This is required.",
                        maxLength: {value: 50, message: "50 letters max."},
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: 'This is not an email format.'
                        }
                    })} />
                </div>
                <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({message}) => <p className={tailWErrorClassName}>{message}</p>}
                />
                <div className="pt-3 relative">
                    <TextField required InputLabelProps={{ shrink: false }} disabled={isLoading} id="filled-multiline-static" label="Message"
                               inputProps={{maxLength: 300, className: 'scrollbar-hide'}}
                               multiline minRows={8} maxRows={8} variant="filled" {...register("message", {
                        onChange: (e) => {
                            setText(e.target.value);
                        }, required: "This is required.", maxLength: 300
                    })} />
                    <p className="absolute bottom-2 right-2 text-[.7rem] w-[55px] h-[15px] text-right -rotate-90 translate-x-6 -translate-y-3 font-[roboto]">{text.length} / {maxCharacterCount}</p>
                </div>
                <ErrorMessage
                    errors={errors}
                    name="message"
                    render={({message}) => <p className={tailWErrorClassName}>{message}</p>}
                />
                <div className="pt-3">
                    <ContactButton id="contactButton" className="bg-zinc-900 text-2xl uppercase font-light disabled:bg-zinc-300" disabled={buttonIsDisabled} type="submit" variant="contained">
                        { isLoading && (
                            <span className="_loader">
                                <svg aria-hidden="true"
                                     className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-zinc-400"
                                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"/>
                                </svg>
                            </span>
                        )}
                        { (!isLoading && !success && !error) && (
                            <span className="_send">Send&nbsp;&nbsp;<SendIcon className="text-base mt-[-2px]" /></span>
                        )}
                        { success && (
                            <span className="text-[.7rem] text-green-700"><CheckCircleIcon />&nbsp;&nbsp;{successMessage}</span>
                        )}
                        { error && (
                            <span className="text-[.7rem] text-red-700"><ErrorIcon />&nbsp;&nbsp;{errorMessage}</span>
                        )}
                    </ContactButton>
                    {/*<input type="submit"/>*/}
                </div>
            </fieldset>
        </Box>
    );
};

export default ContactForm;