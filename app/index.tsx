import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuCard from "../components/MenuCard";
import NavBar from "../components/NavBar";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};

const FEATURED_ITEMS: MenuItem[] = [
  {
    name: "The Sunrise Stack",
    description:
      "Three fluffy buttermilk pancakes layered with whipped maple butter and fresh strawberries.",
    price: "$10.50",
    tag: "Fan Fave",
  },
  {
    name: "Egg and Chorizo Wrap",
    description:
      "Scrambled eggs, spiced chorizo, pepper jack cheese, and pico de gallo in a griddled flour tortilla.",
    price: "$9.00",
    tag: "Spicy",
  },
  {
    name: "Classic Benny",
    description:
      "Toasted English muffin, Canadian bacon, poached egg, and velvety house hollandaise.",
    price: "$11.00",
  },
  {
    name: "Morning Hash Bowl",
    description:
      "Crispy potato hash tossed with roasted peppers, onions, and topped with a fried egg your way.",
    price: "$8.50",
    tag: "New",
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-amber-50" edges={["top"]}>
      <NavBar />

      <ScrollView
        className="flex-1 bg-amber-50"
        showsVerticalScrollIndicator={false}
      >
        <View className="pb-10">

          {/* Hero */}
          <View className="bg-amber-950 px-6 pt-6 pb-10">
            <View className="self-start bg-amber-500 rounded-full px-3 py-1 mb-4">
              <Text className="text-amber-950 text-xs font-bold uppercase tracking-widest">
                Open Now - 7am to 2pm
              </Text>
            </View>

            <Text className="text-amber-50 text-4xl font-bold leading-tight mb-3">
              Breakfast{"\n"}
              <Text className="text-amber-400">Done Right.</Text>
            </Text>

            <Text className="text-amber-200 text-base leading-relaxed">
              Rise and Roll is a roving breakfast truck serving comfort-forward
              morning classics — made fresh, made fast, made with love. Find us
              at farmers markets, downtown corners, and weekend pop-ups across
              the city.
            </Text>

            <TouchableOpacity
              onPress={() => router.push("/menu")}
              className="mt-6 bg-amber-500 rounded-xl py-4 items-center"
              activeOpacity={0.85}
            >
              <Text className="text-amber-950 font-bold text-base tracking-wide">
                See Full Menu
              </Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View className="h-3 bg-amber-200" />

          {/* Featured Items */}
          <View className="px-5 pt-6">
            <Text className="text-amber-950 text-2xl font-bold mb-1">
              Featured Today
            </Text>
            <Text className="text-amber-700 text-sm mb-5">
              Chef's picks — fresh every morning
            </Text>

            {FEATURED_ITEMS.map((item, index) => (
              <MenuCard
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                tag={item.tag}
              />
            ))}
          </View>

          {/* CTA */}
          <View className="mx-5 mt-2 mb-4 bg-amber-100 border border-amber-200 rounded-2xl px-5 py-5">
            <Text className="text-amber-950 font-bold text-base mb-1">
              Check Our Schedule
            </Text>
            <Text className="text-amber-800 text-sm leading-relaxed mb-4">
              We roll to a new spot every day. See where we'll be this week and
              never miss a meal.
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/info")}
              className="bg-amber-950 rounded-xl py-3 items-center"
              activeOpacity={0.85}
            >
              <Text className="text-amber-400 font-bold text-sm tracking-wide">
                Hours and Locations
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}