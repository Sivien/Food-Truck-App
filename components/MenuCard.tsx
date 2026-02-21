import { View, Text } from "react-native";

type MenuCardProps = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};

export default function MenuCard({ name, description, price, tag }: MenuCardProps) {
  return (
    <View className="bg-white rounded-2xl mb-4 border border-amber-200 overflow-hidden">
      <View className="h-1 bg-amber-500" />
      <View className="px-4 py-4">
        <View className="flex-row justify-between items-start mb-2">
          <Text className="text-amber-950 text-lg font-bold flex-1 mr-4 leading-tight">
            {name}
          </Text>
          <Text className="text-amber-600 text-base font-bold">
            {price}
          </Text>
        </View>
        <Text className="text-amber-900 text-sm leading-relaxed">
          {description}
        </Text>
        {tag ? (
          <View className="mt-3 self-start bg-amber-500 rounded-full px-3 py-1">
            <Text className="text-amber-950 text-xs font-bold uppercase tracking-wider">
              {tag}
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}
