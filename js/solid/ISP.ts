interface JsonInterface {
  jsonParse(): string;
}

interface HtmlInterface {
  htmlParse(): string;
}

class Parser implements ShapeInterface, SolidShapeInterface {
  public jsonParse(): string {
    return "Json";
  }

  public htmlParse(): string {
    return "Html";
  }
}
