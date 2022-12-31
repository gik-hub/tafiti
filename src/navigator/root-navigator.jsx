import {createStackNavigator} from '@react-navigation/stack';
import DeleteForm from '../screen/DeleteForm';
import EditSavedForm from '../screen/EditSavedForm';
import FillBlankForm from '../screen/FillBlank';
import GetBlank from '../screen/GetBlank';
import HomeScreen from '../screen/Home';
import SendFinalized from '../screen/SendFinalized';
import ViewSent from '../screen/ViewSent';
import {
  DELETE_SAVED_FORM,
  EDIT_SAVED_FORM,
  FILL_BLANK_FORM,
  GET_BLANK_FORM,
  SEND_FINALIZED_FORM,
  VIEW_SENT_FORMS,
} from './routes-declaration';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name={FILL_BLANK_FORM?.viewTitle}
        component={FillBlankForm}
      />
      <Stack.Screen
        name={EDIT_SAVED_FORM?.viewTitle}
        component={EditSavedForm}
      />
      <Stack.Screen
        name={SEND_FINALIZED_FORM?.viewTitle}
        component={SendFinalized}
      />
      <Stack.Screen name={VIEW_SENT_FORMS?.viewTitle} component={ViewSent} />
      <Stack.Screen name={GET_BLANK_FORM?.viewTitle} component={GetBlank} />
      <Stack.Screen
        name={DELETE_SAVED_FORM?.viewTitle}
        component={DeleteForm}
      />
    </Stack.Navigator>
  );
}

export {RootNavigator};
