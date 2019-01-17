import React from 'react';
import Reminder from '../components/Reminder';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import ColorPallate from './ColorPallate';
import { InputBase, DialogTitle, DialogContent, DialogActions, Dialog, createMuiTheme, MuiThemeProvider } from '@material-ui/core/';
// import Draggable from 'react-draggable';
// import withMobileDialog from '@material-ui/core/withMobileDialog';
import NoteOptions from './NoteOptions';
import NoteImageDisplay from './NoteImageDisplay';
import ImageUpload from './ImageUpload';


const theme = createMuiTheme({
  overrides: {
    MuiChip: {
      label: {
        fontSize: '0.81 rem'
      },
      root: {
        height: 26
      }
    }, MuiDialogContent: {
      root: {
        padding: '0px 12px 6px',
      }
    },
    MuiDialogTitle: {
      root: {
        padding: '8px 12px 0px',

      },
    },
    MuiDialog:
    {
      paperWidthSm: {
        width: '550px',
      }
    },
    MuiPaper: {
      rounded: {
        borderRadius: 8,
      }
    },

  }, typography: {
    useNextVariants: true,
  },
  // MuiChip-label-408  .MuiPaper-rounded-1165  .MuiDialogTitle-root-1429  padding: 0px 12px 6px;
});


export default class NoteEdit extends React.Component {
  state = {
    open: false,
    index: this.props.index,
    note: this.props.note,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    // debugger;
    this.setState({ open: false });
  };

  handleTitleChange = (event) => {
    let note = this.state.note;
    note.title = event.target.value;
    this.setState({
      note: note,
    });
  }

  handleBodyChange = (event) => {
    let note = this.state.note;
    note.body = event.target.value;
    this.setState({
      note: note,
    });
  }

  handleReminderChange = (reminder) => {
    let note = this.state.note;
    note.reminder = reminder;
    this.setState({
      note: note,
    });
  }

  handleDeleteReminder = () => {
    let note = this.state.note;
    note.reminder = null;
    this.setState({
      note: note,
    });
  }

  handlePinChange = (event) => {
    let note = this.state.note;
    note.pinned = event.target.value;
    this.setState({
      note: note,
    });
  }

  /**
   * 
   */
  handleColor = (color) => {
    let note = this.state.note;
    note.color = color;
    this.setState({
      note: note,
    });
  }


  handleEditNote = () => {
    this.handleClose();
    //dashboard function
    this.props.handleNoteEdit(this.props.index, this.state.note);
  }

  handleNoteArchive = () => {
    let note = this.state.note;
    note.archived = note.archived === '0' ? '1' : '0';
    this.setState({
      note: note,
    }, this.handleEditNote());
  }

  /**
   * 
   */
  handleDeleteNoteLabel = (labelid) => {
    this.props.handleDeleteNoteLabel(this.props.index, this.props.note.id, labelid);
  }

  handleDelete = () => {
    alert('kjosdhdkjhsk');
  }

  /**
   * 
   */
  handleImageUpload = (file) => {
    // debugger;
    this.props.handleImageUpload(file, this.props.index);
  }

  /**
   * 
   */
  handleImageDelete = (imageid) => {
    this.props.handleImageDelete(this.props.index, imageid);
  }

  render() {
    const { fullScreen } = this.props;
    // console.log('edit', this.state);



    return (
      <div>
        <MuiThemeProvider theme={theme}>

          <Dialog
            fullScreen={fullScreen}
            open={this.state.open}
            onClose={this.handleEditNote}
            aria-labelledby="responsive-dialog-title"
          >
            <div style={{ background: this.state.note.color }}>
              <div className='note-images-div' >
                <NoteImageDisplay
                  handleImageDelete={this.handleImageDelete}
                  images={this.props.note.images} />
              </div>
              <DialogTitle>
                <InputBase
                  name='title'
                  fullWidth
                  placeholder='Title'
                  defaultValue={this.props.note.title}
                  onChange={this.handleTitleChange}
                />
              </DialogTitle>
              <DialogContent>
                <InputBase
                  name='body'
                  multiline
                  fullWidth
                  defaultValue={this.props.note.body}
                  onChange={this.handleBodyChange}
                />
                <div className='note-chip-div'>{(this.state.note.reminder === null || this.state.note.reminder === '') ? ('') :
                  (
                    <Chip
                      className='remainder-chip'
                      label={this.state.note.reminder}
                      onDelete={this.handleDeleteReminder}
                      icon={<img className='icon' src={require('../assets/icons/ReminderClock.svg')} alt="" />}
                      variant='default'
                    />)}</div>
                <div className='note-labels-div'>
                  {this.props.note.labels.map((label, index) => {
                    // debugger;
                    return <Chip
                      key={index}
                      className='remainder-chip'
                      onDelete={() => this.handleDeleteNoteLabel(label.labelid)}
                      label={label.labelname.label}
                      icon={<img className='icon' src={require('../assets/icons/Label.svg')} alt="" />}
                      variant='default'
                    />
                  })}
                </div>
              </DialogContent>
              <DialogActions>
                <div className='takenote-bottom-icons-div'  >
                  <div  >
                    <Reminder
                      Parent='NoteEdit'
                      ImagesLength={this.props.note.images.length}
                      setReminder={this.handleReminderChange} />
                  </div>

                  <div className='note-icon-div' role='button'>
                    <img src={require('../assets/icons/Collaborator.svg')} alt="" />
                  </div>
                  <ColorPallate setColor={this.handleColor} />
                  <ImageUpload
                    handleImageUpload={this.handleImageUpload} />
                  <div className='note-icon-div' role='Button' onClick={this.handleNoteArchive} >
                    <img
                      src={(this.state.note.archived === '1')
                        ? require('../assets/icons/Unarchive.svg')
                        : require('../assets/icons/Archive.svg')} alt=""
                    />
                  </div>
                  <NoteOptions
                    Parent='NoteEdit'
                    ImagesLength={this.props.note.images.length}
                    note={this.props.note}
                    handleNoteEdit={this.props.handleNoteEdit}
                    user={this.props.user}
                    handleNoteLabel={this.props.handleNoteLabel}
                    handleDeleteNoteLabel={this.props.handleDeleteNoteLabel}

                    index={this.props.index} />
                  <Button className='card-button-close' component="span" onClick={(this.handleEditNote)}>
                    Close
                  </Button>
                </div>
              </DialogActions>
            </div>
          </Dialog>

        </MuiThemeProvider>
      </div>
    );
  }
}
