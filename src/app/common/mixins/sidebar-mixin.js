import {baseSidebarState} from "@/app/common/components/baseSidebar/base-sidebar.state";

const sidebarCollapse = {
    computed: {
        isCollapse() {
            return baseSidebarState.isCollapse;
        }
    }
}

export default sidebarCollapse;
