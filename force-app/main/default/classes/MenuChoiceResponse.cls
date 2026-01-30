public class MenuChoiceResponse {
  public String prompt;
  public List<String> items;

  public MenuChoiceResponse(String prompt, List<String> items) {
      this.prompt = prompt;
      this.items = items;
  }
}