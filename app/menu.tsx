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

type MenuSection = {
  section: string;
  items: MenuItem[];
};

const MENU_SECTIONS: MenuSection[] = [
  {
    section: "Plates",
    items: [
      {
        name: "The Sunrise Stack",
        description:
          "Three fluffy buttermilk pancakes with whipped maple butter and fresh strawberries.",
        price: "$10.50",
        tag: "Fan Fave",
      },
      {
        name: "Classic Benny",
        description:
          "English muffin, Canadian bacon, poached egg, and house hollandaise.",
        price: "$11.00",
      },
      {
        name: "Two-Egg Plate",
        description:
          "Two eggs your way with crispy bacon or sausage, toast, and house jam.",
        price: "$8.00",
      },
    ],
  },
  {
    section: "Handheld",
    items: [
      {
        name: "Egg and Chorizo Wrap",
        description:
          "Scrambled eggs, spiced chorizo, pepper jack, and pico de gallo in a griddled tortilla.",
        price: "$9.00",
        tag: "Spicy",
      },
      {
        name: "B.E.C. Croissant",
        description:
          "Bacon, egg, and cheddar on a buttery flaky croissant. A true on-the-go classic.",
        price: "$7.50",
      },
      {
        name: "Veggie Breakfast Burrito",
        description:
          "Black beans, roasted sweet potato, scrambled egg, avocado, and salsa verde.",
        price: "$8.50",
        tag: "Veggie",
      },
    ],
  },
  {
    section: "Bowls",
    items: [
      {
        name: "Morning Hash Bowl",
        description:
          "Crispy potato hash with roasted peppers, onions, and a fried egg your way.",
        price: "$8.50",
        tag: "New",
      },
      {
        name: "Avocado Grain Bowl",
        description:
          "Quinoa, sliced avocado, cucumber, soft-boiled egg, everything seasoning, lemon drizzle.",
        price: "$10.00",
        tag: "Veggie",
      },
    ],
  },
  {
    section: "Drinks",
    items: [
      {
        name: "Cold Brew",
        description: "Slow-steeped 18 hours. Smooth, bold, and served over ice.",
        price: "$4.50",
      },
      {
        name: "Fresh Orange Juice",
        description: "Hand-squeezed every morning. Pure sunshine in a cup.",
        price: "$4.00",
      },
      {
        name: "Drip Coffee",
        description: "House blend — medium roast, bright and balanced.",
        price: "$3.00",
      },
    ],
  },
];

export default function MenuScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-amber-50" edges={["top"]}>
      <NavBar />

      <ScrollView
        className="flex-1 bg-amber-50"
        showsVerticalScrollIndicator={false}
      >
        <View className="pb-12">

          {/* Header */}
          <View className="bg-amber-950 px-6 pt-5 pb-8">
            <Text className="text-amber-400 text-3xl font-bold mb-1">
              Full Menu
            </Text>
            <Text className="text-amber-200 text-sm leading-relaxed">
              Everything made fresh to order. Arrive early — we sell out fast!
            </Text>
          </View>

          <View className="h-3 bg-amber-200" />

          {/* Sections */}
          <View className="px-5 pt-6">
            {MENU_SECTIONS.map((section, si) => (
              <View key={si} className="mb-6">
                <Text className="text-amber-950 text-xl font-bold mb-4 pb-2 border-b-2 border-amber-200">
                  {section.section}
                </Text>
                {section.items.map((item, ii) => (
                  <MenuCard
                    key={ii}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    tag={item.tag}
                  />
                ))}
              </View>
            ))}
          </View>
          {/* Back */}
          <View className="px-5">
            <TouchableOpacity
              onPress={() => router.push("/")}
              className="bg-amber-950 rounded-xl py-4 items-center"
              activeOpacity={0.85}
            >
              <Text className="text-amber-400 font-bold text-base tracking-wide">
                Back to Home
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
