import React from 'react';
import {VStack} from 'native-base';

import {Button} from '../../components/Button/HomeButton';
import {
  DELETE_SAVED_FORM,
  EDIT_SAVED_FORM,
  FILL_BLANK_FORM,
  GET_BLANK_FORM,
  SEND_FINALIZED_FORM,
  VIEW_SENT_FORMS,
} from '../../navigator/routes-declaration';

const savedForms = [1, 2, 3, 4, 5];
const finalizedForms = [];
const sentForms = [1, 2, 3, 4, 5, 6, 7];

export default function HomeScreen({navigation}) {
  const savedFormsCount = savedForms?.length ? `(${savedForms?.length})` : '';
  const finalizedFormsCount = finalizedForms?.length
    ? `(${finalizedForms?.length})`
    : '';
  const sentFormsCount = sentForms?.length ? `(${sentForms?.length})` : '';
  return (
    <VStack p={4} space={4}>
      <Button onPress={() => navigation.navigate(FILL_BLANK_FORM?.viewTitle)}>
        {FILL_BLANK_FORM?.viewTitle}
      </Button>
      <Button onPress={() => navigation.navigate(EDIT_SAVED_FORM?.viewTitle)}>
        {`Edit saved Forms ${savedFormsCount}`}
      </Button>
      <Button
        onPress={() => navigation.navigate(SEND_FINALIZED_FORM?.viewTitle)}>
        {`Send Finalized Forms ${finalizedFormsCount}`}
      </Button>
      <Button onPress={() => navigation.navigate(VIEW_SENT_FORMS?.viewTitle)}>
        {`View Sent Forms ${sentFormsCount}`}
      </Button>
      <Button onPress={() => navigation.navigate(GET_BLANK_FORM?.viewTitle)}>
        Get Blank Form
      </Button>
      <Button onPress={() => navigation.navigate(DELETE_SAVED_FORM?.viewTitle)}>
        Delete Saved Form
      </Button>
    </VStack>
  );
}
