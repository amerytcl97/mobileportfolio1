import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { BORDER_RADIUS_FULL } from '../../constants/styles/borderRadius';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SECONDARY_THEME } from '../../constants/styles';
import { useEffect, useState } from 'react';

export type SearchInputProps = TextInputProps & {
  onSubmit?: (text: string) => void;
  showSearchIcon?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

const SearchInput = (props: SearchInputProps) => {
  const {
    placeholder = 'Search',
    onSubmit = () => {},
    placeholderTextColor = SECONDARY_THEME,
    editable = true,
    style: customStyle,
    containerStyle,
    showSearchIcon = false,
    value,
    ...otherProps
  } = props;
  const [searchQuery, setSearchQuery] = useState<string>(value || '');

  const handleOnSubmit = () => {
    onSubmit(searchQuery);
  };

  useEffect(() => {
    if (value) {
      setSearchQuery(value);
    }
  }, [value]);

  return (
    <View style={[style.container, containerStyle]}>
      {showSearchIcon && <Ionicons name="search-outline" size={28} />}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        editable={editable}
        onSubmitEditing={() => handleOnSubmit()}
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={[style.input, customStyle]}
        {...otherProps}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: 50,
    width: '100%',
  },
  input: {
    // padding: 15,
    fontSize: 20,
    width: '100%',
  },
});

export default SearchInput;
