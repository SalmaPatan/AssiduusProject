
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const CustomDialog = ({ open, content, title, primaryButtonText, secondaryButtonText, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}  >
      <DialogTitle className="flex flex-row justify-between items-center">{title}
        <Button class="pointer">
          <CloseIcon onClick={handleClose} />
        </Button>
      </DialogTitle>
      <DialogContent>
        <p>{content}</p>
      </DialogContent>
      <DialogActions class="flex flex-row justify-end">
        <Button onClick={handleClose} class='text-green-500 border border-green-500 bg-white rounded-lg m-2 h-10 w-20' >
          {secondaryButtonText}
        </Button>
        <Button onClick={handleClose} class='bg-green-500 text-white rounded-lg m-2 h-10 w-20' >
          {primaryButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CustomDialog;






