public with sharing class MenuChoiceAction {

    // (Optional) request wrapper. You can leave it empty and ignore it.
    public class Request {
        @InvocableVariable(label='Context')
        public String context;
    }

    public class MenuActionOutput {
        @InvocableVariable(label='menu')
        public MenuChoiceResponse menu;
    }

    @InvocableMethod(
        label='Show Menu (Hard-coded)'
        description='Returns a hard-coded menu list for the agent action output.'
    )
    public static List<MenuActionOutput> showMenu(List<Request> reqs) {
        MenuChoiceResponse m = new MenuChoiceResponse(
            'メニューを選んでください。',
            new List<String>{ 'うどん', '焼きそば', 'ラーメン' }
        );
        MenuActionOutput outp = new MenuActionOutput();
        outp.menu = m;
        return new List<MenuActionOutput>{ outp };
    }
}