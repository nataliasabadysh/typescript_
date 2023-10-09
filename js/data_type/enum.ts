enum Toggle {
  ENABLE,
  DISABLE,
}

const service = {
  status: Toggle.ENABLE,
};

if (service.status === Toggle.ENABLE) {
  console.log("It is active");
}
