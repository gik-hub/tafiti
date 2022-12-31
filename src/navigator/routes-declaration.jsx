import DeleteForm from '../screen/DeleteForm';
import EditSavedForm from '../screen/EditSavedForm';
import FillBlankForm from '../screen/FillBlank';
import GetBlank from '../screen/GetBlank';
import SendFinalized from '../screen/SendFinalized';
import ViewSent from '../screen/ViewSent';

export const FILL_BLANK_FORM = {
  name: 'FILL_BLANK_FORM',
  screen: FillBlankForm,
  viewTitle: 'FIll Blank Form',
};

export const EDIT_SAVED_FORM = {
  name: 'EDIT_SAVED_FORM',
  screen: EditSavedForm,
  viewTitle: 'Edit Saved Form',
};

export const SEND_FINALIZED_FORM = {
  name: 'SEND_FINALIZED_FORM',
  screen: SendFinalized,
  viewTitle: 'Send Finalized Form',
};

export const VIEW_SENT_FORMS = {
  name: 'VIEW_SENT_FORMS',
  screen: ViewSent,
  viewTitle: 'View Sent Form',
};

export const GET_BLANK_FORM = {
  name: 'GET_BLANK_FORM',
  screen: GetBlank,
  viewTitle: 'Get Blank Form',
};

export const DELETE_SAVED_FORM = {
  name: 'DELETE_SAVED_FORM',
  screen: DeleteForm,
  viewTitle: 'Delete Saved Form',
};
