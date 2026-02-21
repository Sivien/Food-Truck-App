import { View, Text, TouchableOpacity } from "react-native";
import { useRouter, usePathname } from "expo-router";

type Tab = {
  label: string;
  route: string;
};

const TABS: Tab[] = [
  { label: "Home", route: "/" },
  { label: "Full Menu", route: "/menu" },
  { label: "Find Us", route: "/info" },
];

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View className="bg-amber-950 px-4 pt-12 pb-0">
      <View className="mb-4">
        <Text className="text-amber-400 text-xl font-bold tracking-widest uppercase">
          Rise and Roll
        </Text>
        <Text className="text-amber-200 text-xs tracking-wide">
          Breakfast Food Truck
        </Text>
      </View>

      <View className="flex-row">
        {TABS.map((tab) => {
          const isActive = pathname === tab.route;
          if (isActive) {
            return (
              <TouchableOpacity
                key={tab.route}
                onPress={() => router.push(tab.route as any)}
                className="mr-1 px-4 py-2 rounded-t-xl bg-amber-50"
                activeOpacity={0.8}
              >
                <Text className="text-sm font-bold text-amber-950">
                  {tab.label}
                </Text>
              </TouchableOpacity>
            );
          }
          return (
            <TouchableOpacity
              key={tab.route}
              onPress={() => router.push(tab.route as any)}
              className="mr-1 px-4 py-2 rounded-t-xl bg-amber-900"
              activeOpacity={0.8}
            >
              <Text className="text-sm font-semibold text-amber-200">
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
