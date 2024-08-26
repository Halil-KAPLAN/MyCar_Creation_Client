import { useGetAllCategoryQuery } from "@/storage/apis/categoryApi";
import { Text, View } from "react-native";

export default function Index() {
  const { data, isLoading } = useGetAllCategoryQuery(null);

  if (isLoading) {
    return <Text>Loading...</Text>;
  } else {
    console.log(data);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Test fana</Text>
    </View>
  );
}
