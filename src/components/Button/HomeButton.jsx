// import {Button as NPButton} from 'react-native-paper';
import {Button as NPButton} from 'native-base';

export default function Button({children, ...props}) {
  return (
    <NPButton size={'lg'} variant="outline" {...props}>
      {children}
    </NPButton>
  );
}

export {Button};
