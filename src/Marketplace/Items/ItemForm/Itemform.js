import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const CustomizedDialogs = props => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredImage, setEnteredImage] = useState('');
    const [open, setOpen] = useState(false);

    const submitHandler = event => {
        event.preventDefault();
        const data = {
            name: enteredName,
            price: enteredAmount,
            quantity: 0,
            img: enteredImage
        }
        axios.post('https://marketplace-52be8-default-rtdb.firebaseio.com/items.json', data)
            .then(response => {
                console.log(response);
            });
        props.onAddItem(data);
    }

    const handleClickOpen = () => {
        setOpen(true);
       // console.log("[handleClickOpen]" +open);
    };
    const handleClose = () => {
        setOpen(false);
        //console.log("[handleClose]"+ open);
    };

    return (
        <div >
            <button className='marketplace-btn' variant="outlined" color="primary" onClick={handleClickOpen}>
                Add item to Marketplace
            </button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogContent className="modal">
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Item to Marketplace
                </DialogTitle>

                <form onSubmit={submitHandler} className="item-form">
                    <input type="text"
                           id="title"
                           placeholder="Name:"
                           value={enteredName}
                           onChange={event => {
                               setEnteredName(event.target.value)
                           }}
                    />
                    <input type="number"
                           id="amount"
                           placeholder='$0'
                           value={enteredAmount}
                           onChange={event => {
                               setEnteredAmount(event.target.value)
                           }}
                    />
                    <input type="url"
                           id="image"
                           placeholder='img'
                           value={enteredImage}
                           onChange={event => {
                               setEnteredImage(event.target.value)
                           }}
                    />
                    <Button type='submit' autoFocus onClick={handleClose} color="primary">
                        Save changes
                    </Button>
                </form>
                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CustomizedDialogs;
