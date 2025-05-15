import Layout from "@/components/Layout";

export const metadata = {
  title: "Dashboard | MockPro",
  description: "",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
