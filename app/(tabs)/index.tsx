import { View, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function HomeScreen() {
  return (
    <StyledView className="flex-1 items-center justify-center">
      <StyledText className="text-xl font-bold">Welcome to your app!</StyledText>
    </StyledView>
  );
} 