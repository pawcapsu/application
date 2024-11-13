<script lang="ts">
    import Logotype from "$lib/assets/pawcapsu-black-small.svg";
    import TestComicsImage from "$lib/assets/920949c1-d1b9-4f2e-9f28-515f3ca6aa89.jpg";
    import TestProfileAvatar from "$lib/assets/360_F_569712099_v23gg0aE8CCOmunPB9Q3kYUBJf3f8KLu.jpg";

    import LucideSearch from '~icons/lucide/search';
    import LucideSquareUserRound from '~icons/lucide/square-user-round';
    import LucideLayoutDashboard from '~icons/lucide/layout-dashboard';
    import LucideGlobe from '~icons/lucide/globe';
    import LucideRss from '~icons/lucide/rss';
    import LucideSettings from '~icons/lucide/settings';
    import LucidePen from '~icons/lucide/pen';
    import LucideChevronDown from '~icons/lucide/chevron-down';

</script>

<main class="w-full h-screen bg-slate-200 overflow-hidden">
    <!-- Header -->
    <header class="w-full flex items-center justify-between py-4 px-6">
        <!-- Logotype -->
        <div class="w-1/4 flex items-center gap-4">
            <img src={Logotype} class="w-8 h-8" alt="pawcapsu logotype">
        
            <!-- Account badge -->
            <div class="flex cursor-pointer transition items-center gap-4 p-2 px-4 bg-slate-100 bg-opacity-60 hover:bg-opacity-100 rounded-xl border-2 border-gray-300">
                <!-- Account icon -->
                <img src={TestProfileAvatar} class="w-9 h-9 rounded-full" alt="profile avatar">

                <!-- Texts -->
                <div class="text-left">
                    <h1 class="text-sm font-bold">juiipup</h1>
                    <p class="text-xs">Lorem ipsum dolor sit amet.</p>
                </div>

                <!-- More settings button -->
                <button class="transition p-2 rounded-md hover:bg-slate-200">
                    <LucideChevronDown class="w-5 h-5" />
                </button>
            </div>
        </div>

        <!-- Search bar -->
        <div class="w-2/4">
            <div class="w-full rounded-xl bg-slate-100 py-2 px-4 border-[1px] border-gray-300 flex items-center">
                <!-- Icon -->
                <LucideSearch class="w-4 h-4 text-gray-700" />

                <!-- Input -->
                <input type="text" placeholder="Search" class="ml-4 w-full bg-slate-100">
            </div>
        </div>

        <!-- todo: Other things -->
        <div class="w-1/4"></div>
    </header>

    <!-- Page -->
    <div class="w-full h-screen flex">
        <!-- Sidebar -->
        <sidebar class="pt-6 min-w-max h-screen px-4 overflow-auto">
            <!-- Navigation buttons -->
            <div class="w-full flex items-center justify-between text-black px-2 opacity-60 hover:opacity-100 transition">
                <p class="text-xs font-medium uppercase">Navigation</p>

                <!-- Settings -->
                <button class="transition p-2 rounded-md hover:bg-white">
                    <LucidePen class="w-4 h-4" />
                </button>
            </div>

            {#each [
                {
                    isSelected: true,
                    icon: LucideLayoutDashboard,
                    title: "For you"
                },
                {
                    isSelected: false,
                    icon: LucideGlobe,
                    title: "Explore"
                },
                {
                    isSelected: false,
                    icon: LucideRss,
                    title: "Subscriptions",
                    notificationsCount: 20,
                },
                {
                    isSelected: false,
                    icon: LucideSettings,
                    title: "Settings"
                },
            ] as button}
                <button class="
                    rounded-xl w-full my-4 px-4 py-3 flex items-center border-2 transition 
                    { button.isSelected ? "font-bold bg-white shadow-md border-gray-200 cursor-not-allowed hover:bg-gray-100" : "font-medium text-black border-transparent opacity-70 hover:opacity-100 hover:bg-white hover:shadow-md hover:border-gray-200" }"
                >
                    <svelte:component this={button.icon} class="w-5 h-5" />

                    <h1 class="ml-3 text-md">{ button.title }</h1>

                    <!-- Notifications -->
                    {#if button.notificationsCount}
                        <div class="ml-auto bg-red-500 p-1.5 rounded-md">
                            <p class="text-xs text-white">{button.notificationsCount}</p>
                        </div>
                    {/if}
                </button>
            {/each}

            <!-- Other customizable sections -->
            <div class="mt-10 w-full flex items-center justify-between text-black px-2 opacity-60 hover:opacity-100 transition">
                <p class="text-xs font-medium uppercase">Subscriptions</p>

                <!-- Settings -->
                <button class="transition p-2 rounded-md hover:bg-white">
                    <LucidePen class="w-4 h-4" />
                </button>
            </div>

            <!-- Subscriptions list -->
            {#each [1,2,3,4] as subscription}
                <button class="
                    rounded-xl w-full my-4 px-4 py-3 flex items-center border-2 transition 
                    text-black border-transparent opacity-70 hover:opacity-100 hover:bg-white hover:shadow-md hover:border-gray-200"
                >
                    <img src={TestComicsImage} class="w-9 h-9 bg-red-500 rounded-md" alt="">

                    <div class="ml-3 text-left">
                        <div class="flex items-center">
                            <p class="text-[0.6rem] uppercase">Comics</p>
                        
                            <!-- Divider -->
                            <span class="rounded-full h-1 w-1 bg-black opacity-40 mx-2"></span>

                            <p class="text-[0.6rem] uppercase">Updated yesterday</p>
                        </div>

                        <h1 class="text-md font-medium">Test comics</h1>
                    </div>
                </button>
            {/each}
        </sidebar>

        <!-- Content -->
        <section class="w-full bg-green-500 h-screen overflow-auto">

        </section>
    </div>
</main>