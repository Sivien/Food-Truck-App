import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "../components/NavBar";

type ScheduleSlot = {
  day: string;
  location: string;
  address: string;
  hours: string;
  closed?: boolean;
};

const WEEKLY_SCHEDULE: ScheduleSlot[] = [
  {
    day: "Monday",
    location: "City Hall Plaza",
    address: "124 Main St — Downtown",
    hours: "7:00 AM - 1:00 PM",
  },
  {
    day: "Tuesday",
    location: "Riverside Park Lot",
    address: "Elm and River Rd — Eastside",
    hours: "7:30 AM - 1:30 PM",
  },
  {
    day: "Wednesday",
    location: "Midtown Arts District",
    address: "4th and Maple Ave — Midtown",
    hours: "7:00 AM - 2:00 PM",
  },
  {
    day: "Thursday",
    location: "Tech Campus Commons",
    address: "800 Innovation Blvd — North End",
    hours: "7:30 AM - 1:00 PM",
  },
  {
    day: "Friday",
    location: "Central Farmers Market",
    address: "Oak and 5th St — Uptown",
    hours: "6:30 AM - 2:00 PM",
  },
  {
    day: "Saturday",
    location: "Westlake Pop-Up Lot",
    address: "2201 Westlake Dr — Westside",
    hours: "8:00 AM - 2:00 PM",
  },
  {
    day: "Sunday",
    location: "Closed",
    address: "See you Monday!",
    hours: "",
    closed: true,
  },
];

const TODAY = new Date().toLocaleDateString("en-US", { weekday: "long" });

export default function InfoScreen() {
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
              Find Us
            </Text>
            <Text className="text-amber-200 text-sm leading-relaxed">
              We're always on the move! Check our weekly rotation below, or
              follow us on Instagram @riseandrolltruck for last-minute updates.
            </Text>
          </View>

          <View className="h-3 bg-amber-200" />

          {/* Schedule */}
          <View className="px-5 pt-6">
            <Text className="text-amber-950 text-xl font-bold mb-4 pb-2 border-b-2 border-amber-200">
              Weekly Schedule
            </Text>

            {WEEKLY_SCHEDULE.map((slot, index) => {
              const isToday = slot.day === TODAY;

              if (isToday) {
                return (
                  <View key={index} className="rounded-2xl mb-3 overflow-hidden border border-amber-600 bg-amber-500">
                    <View className="h-1 bg-amber-950" />
                    <View className="px-4 py-4">
                      <View className="flex-row items-center justify-between mb-1">
                        <View className="flex-1">
                          <Text className="font-bold text-base text-amber-950">
                            {slot.day} — Today
                          </Text>
                          <Text className="font-semibold text-sm text-amber-900">
                            {slot.location}
                          </Text>
                        </View>
                        <View className="rounded-full px-3 py-1 bg-amber-950">
                          <Text className="text-xs font-bold text-amber-400">
                            {slot.hours}
                          </Text>
                        </View>
                      </View>
                      <Text className="text-sm text-amber-900">
                        {slot.address}
                      </Text>
                    </View>
                  </View>
                );
              }

              if (slot.closed) {
                return (
                  <View key={index} className="rounded-2xl mb-3 overflow-hidden border border-stone-200 bg-white opacity-50">
                    <View className="px-4 py-4">
                      <Text className="font-bold text-base text-amber-950">
                        {slot.day}
                      </Text>
                      <Text className="text-sm text-amber-700">
                        {slot.location} — {slot.address}
                      </Text>
                    </View>
                  </View>
                );
              }

              return (
                <View key={index} className="rounded-2xl mb-3 overflow-hidden border border-amber-200 bg-white">
                  <View className="h-1 bg-amber-500" />
                  <View className="px-4 py-4">
                    <View className="flex-row items-center justify-between mb-1">
                      <View className="flex-1">
                        <Text className="font-bold text-base text-amber-950">
                          {slot.day}
                        </Text>
                        <Text className="font-semibold text-sm text-amber-800">
                          {slot.location}
                        </Text>
                      </View>
                      <View className="rounded-full px-3 py-1 bg-amber-100">
                        <Text className="text-xs font-bold text-amber-700">
                          {slot.hours}
                        </Text>
                      </View>
                    </View>
                    <Text className="text-sm text-amber-700">
                      {slot.address}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>

          {/* Contact */}
          <View className="mx-5 mt-4 bg-amber-950 rounded-2xl px-5 py-5 mb-6">
            <Text className="text-amber-400 font-bold text-base mb-3">
              Stay Connected
            </Text>
            <View className="mb-3">
              <Text className="text-amber-300 text-xs uppercase tracking-wider mb-1">
                Instagram
              </Text>
              <Text className="text-amber-100 font-semibold">
                @riseandrolltruck
              </Text>
            </View>
            <View className="mb-3">
              <Text className="text-amber-300 text-xs uppercase tracking-wider mb-1">
                Phone
              </Text>
              <Text className="text-amber-100 font-semibold">
                (555) 204-7788
              </Text>
            </View>
            <View>
              <Text className="text-amber-300 text-xs uppercase tracking-wider mb-1">
                Catering
              </Text>
              <Text className="text-amber-100 font-semibold">
                hello@riseandroll.co
              </Text>
            </View>
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
