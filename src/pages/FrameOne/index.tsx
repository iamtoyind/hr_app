import React from "react";

import { Button, CheckBox, Img, Input, Line, Switch, Text } from "components";

const FrameOnePage: React.FC = () => {
  return (
    <>
      <div className="flex font-poppins h-[3408px] justify-end mx-auto relative w-full">
        <div className="absolute bottom-[0] sm:h-[1381px] md:h-[957px] h-[976px] left-[19%] md:px-5 w-[37%] md:w-full">
          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[30px] sm:px-5 rounded-[20px] shadow-bs w-full">
            <div className="flex flex-col items-start justify-start mt-[101px] w-[97%] md:w-full">
              <Text className="text-gray-500 text-sm" size="txtPoppinsMedium14">
                Paragraph
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-[52px] items-start justify-between mt-[7px] w-[99%] md:w-full">
                <Text
                  className="text-black-900 text-xl"
                  size="txtPoppinsSemiBold20"
                >
                  Please tell me about yourself in less than 500 words
                </Text>
                <Img
                  className="h-[17px] md:h-auto sm:mt-0 mt-0.5 object-cover w-[18px] sm:w-full"
                  src="images/img_image156.png"
                  alt="image156"
                />
              </div>
              <Line className="bg-gray-400 h-px mt-[51px] w-full" />
              <Text
                className="mt-5 text-gray-500 text-sm"
                size="txtPoppinsMedium14"
              >
                Dropdown
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-[52px] items-start justify-between mt-[7px] w-[99%] md:w-full">
                <Text
                  className="leading-[114.00%] text-black-900 text-xl"
                  size="txtPoppinsSemiBold20"
                >
                  Please select the year of graduation from the list below
                </Text>
                <Img
                  className="h-[17px] md:h-auto sm:mt-0 mt-[7px] object-cover w-[18px] sm:w-full"
                  src="images/img_image156.png"
                  alt="image239"
                />
              </div>
              <Text
                className="mt-[27px] text-black-900 text-xl"
                size="txtPoppinsSemiBold20"
              >
                Question
              </Text>
              <Input
                name="groupEight"
                placeholder="Type here"
                className="font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
                wrapClassName="mt-2.5 w-[99%]"
                shape="round"
                color="black_900"
                size="xs"
                variant="outline"
              ></Input>
              <Text
                className="ml-9 md:ml-[0] mt-[26px] text-black-900 text-xl"
                size="txtPoppinsMedium20"
              >
                Choice
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[5px] mt-2.5 w-[97%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_iconsparagraph.svg"
                  alt="iconsparagraph"
                />
                <Input
                  name="groupSeven"
                  placeholder="Type here"
                  className="font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
                  wrapClassName="sm:w-full"
                  shape="round"
                  color="gray_500_01"
                  size="xs"
                  variant="outline"
                ></Input>
                <Img
                  className="h-[13px] w-[13px]"
                  src="images/img_plus.svg"
                  alt="plus"
                />
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start mt-[47px] w-[99%] md:w-full">
                <Img
                  className="h-[33px] sm:mt-0 mt-1.5 w-[33px]"
                  src="images/img_close.svg"
                  alt="close"
                />
                <Text
                  className="mb-1 sm:ml-[0] ml-[11px] sm:mt-0 mt-3 text-[15px] text-red-900 tracking-[-0.09px]"
                  size="txtPoppinsSemiBold15"
                >
                  Delete question
                </Text>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] mb-1 min-w-[59px] sm:ml-[0] ml-[287px] text-center text-sm"
                  shape="round"
                >
                  Save
                </Button>
              </div>
              <Line className="bg-gray-400 h-px mt-[52px] w-full" />
              <Text
                className="ml-0.5 md:ml-[0] mt-[19px] text-gray-500 text-sm"
                size="txtPoppinsMedium14"
              >
                Yes/No questions
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-[52px] items-start justify-between ml-0.5 md:ml-[0] mt-2 w-[99%] md:w-full">
                <Text
                  className="leading-[114.00%] text-black-900 text-xl"
                  size="txtPoppinsSemiBold20"
                >
                  Have you ever been rejected by the UK embassy?
                </Text>
                <Img
                  className="h-[17px] md:h-auto sm:mt-0 mt-0.5 object-cover w-[18px] sm:w-full"
                  src="images/img_image156.png"
                  alt="image240"
                />
              </div>
              <div className="flex flex-row gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-[52px] w-[31%] md:w-full">
                <Img
                  className="h-6 w-[23px]"
                  src="images/img_plus.svg"
                  alt="plus_One"
                />
                <Text
                  className="mt-0.5 text-[15px] text-black-900 tracking-[-0.09px]"
                  size="txtPoppinsSemiBold15Black900"
                >
                  Add a question
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="absolute bg-cyan-50 h-[93px] inset-x-[0] justify-center mx-auto pb-[22px] pl-[30px] pr-[35px] pt-8 sm:px-5 rounded-tl-[20px] rounded-tr-[20px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 top-[0] w-max"
            size="txtPoppinsSemiBold25"
          >
            Additional questions
          </Text>
        </div>
        <div className="md:h-[1516px] sm:h-[1757px] h-[454px] mb-[1070px] ml-[308px] mt-auto md:px-5 w-[37%] md:w-full">
          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[26px] sm:px-5 rounded-[20px] shadow-bs w-full">
            <div className="flex flex-col items-start justify-start mt-[120px] w-[96%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-[33px] items-start justify-between w-full">
                <div className="flex relative w-3/4 sm:w-full">
                  <CheckBox
                    className="font-semibold my-auto sm:pr-5 text-left text-xl"
                    inputClassName="border border-blue_gray-100 border-solid h-[18px] mr-[5px] w-[18px] z-[1]"
                    name="education"
                    id="education"
                    label="Education"
                  ></CheckBox>
                  <CheckBox
                    className="ml-[-18px] mt-auto text-[15px] text-left tracking-[-0.09px] z-[1]"
                    inputClassName="border border-blue_gray-100 border-solid h-[18px] mr-[5px] w-[18px] z-[1]"
                    name="value_Two"
                    id="value_Two"
                    label="Mandatory"
                  ></CheckBox>
                </div>
                <div className="flex flex-row font-notosans gap-4 items-start justify-start sm:mt-0 mt-1 w-[100px]">
                  <Switch
                    onColor="#ffffff"
                    offColor="#077b2e"
                    onHandleColor="#f4f4f4"
                    offHandleColor="#ffffff"
                    value={true}
                    className="outline outline-[0.5px] outline-blue_gray-100_01 w-[49%]"
                  />
                  <Text
                    className="text-base text-gray-700 w-auto"
                    size="txtNotoSansRegular16"
                  >
                    Hide
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-400 h-px mt-7 w-full" />
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[26px] w-full">
                <Text
                  className="text-black-900 text-xl"
                  size="txtPoppinsSemiBold20"
                >
                  Experience
                </Text>
                <div className="bg-green-900 flex flex-col h-[18px] items-center justify-start sm:ml-[0] ml-[164px] sm:mt-0 my-[5px] p-[5px] rounded w-[18px]">
                  <Img
                    className="h-[5px]"
                    src="images/img_vector266.svg"
                    alt="vector266"
                  />
                </div>
                <Text
                  className="ml-2 sm:ml-[0] sm:mt-0 mt-1.5 text-[15px] text-black-900 tracking-[-0.09px]"
                  size="txtPoppinsRegular15"
                >
                  Mandatory
                </Text>
                <div className="flex flex-row font-notosans gap-4 items-start justify-start sm:ml-[0] ml-[26px] sm:mt-0 mt-[3px] w-[106px]">
                  <Switch
                    onColor="#ffffff"
                    offColor="#077b2e"
                    onHandleColor="#f4f4f4"
                    offHandleColor="#ffffff"
                    value={false}
                    className="outline outline-[0.5px] outline-blue_gray-100_01 w-[47%]"
                  />
                  <Text
                    className="text-base text-gray-700 w-auto"
                    size="txtNotoSansRegular16"
                  >
                    Show
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-400 h-px mt-[26px] w-full" />
              <div className="flex sm:flex-col flex-row gap-[33px] items-center justify-between mt-[23px] w-full">
                <div className="h-[30px] relative w-3/4 sm:w-full">
                  <CheckBox
                    className="font-semibold my-auto sm:pr-5 text-left text-xl"
                    inputClassName="absolute border border-blue_gray-100 border-solid h-[18px] mr-[5px] w-[18px]"
                    name="resume"
                    id="resume"
                    label="Resume"
                  ></CheckBox>
                  <CheckBox
                    className="text-[15px] text-left tracking-[-0.09px]"
                    inputClassName="absolute border border-blue_gray-100 border-solid h-[18px] mr-[5px] w-[18px]"
                    name="value_Four"
                    id="value_Four"
                    label="Mandatory"
                  ></CheckBox>
                </div>
                <div className="flex flex-row font-notosans gap-4 items-start justify-start w-[100px]">
                  <Switch
                    onColor="#ffffff"
                    offColor="#077b2e"
                    onHandleColor="#f4f4f4"
                    offHandleColor="#ffffff"
                    value={true}
                    className="outline outline-[0.5px] outline-blue_gray-100_01 w-[49%]"
                  />
                  <Text
                    className="text-base text-gray-700 w-auto"
                    size="txtNotoSansRegular16"
                  >
                    Hide
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-5 items-start justify-start mt-[54px] w-[31%] md:w-full">
                <Img
                  className="h-6 w-[23px]"
                  src="images/img_plus.svg"
                  alt="plus_Two"
                />
                <Text
                  className="mt-0.5 text-[15px] text-black-900 tracking-[-0.09px]"
                  size="txtPoppinsSemiBold15Black900"
                >
                  Add a question
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="absolute bg-cyan-50 h-[93px] inset-x-[0] justify-center mx-auto pl-8 pr-[35px] sm:px-5 py-[27px] rounded-tl-[20px] rounded-tr-[20px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 top-[0] w-max"
            size="txtPoppinsSemiBold25"
          >
            Profile
          </Text>
        </div>
        <div className="absolute font-inter md:h-[2194px] sm:h-[3090px] h-[3100px] inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <div className="md:h-[2194px] sm:h-[3090px] h-[3100px] m-auto w-full">
            <div className="absolute bg-white-A700 flex flex-row inset-x-[0] items-center justify-center mx-auto p-[25px] sm:px-5 rounded-[9px] shadow-bs1 top-[4%] w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[54%]">
                <Text
                  className="text-black-900 text-xl"
                  size="txtInterMedium20"
                >
                  Program Details
                </Text>
                <Text
                  className="md:ml-[0] ml-[484px] text-black-900 text-xl"
                  size="txtInterMedium20"
                >
                  Workflow
                </Text>
                <Line className="bg-gray-400 h-[78px] md:h-px md:ml-[0] ml-[132px] md:w-full w-px" />
              </div>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-[130px] items-start justify-end left-[35%] p-[52px] md:px-10 sm:px-5 top-[4%]"
              style={{ backgroundImage: "url('images/img_group12.svg')" }}
            >
              <Text
                className="text-white-A700 text-xl"
                size="txtInterMedium20WhiteA700"
              >
                Application Form
              </Text>
            </div>
            <div className="absolute bg-white-A700 flex flex-col font-poppins md:gap-10 gap-[936px] h-full inset-y-[0] items-center justify-start left-[7%] my-auto p-[33px] sm:px-5 shadow-bs2 w-[8%]">
              <div className="flex flex-col items-start justify-start mt-4 w-[71%] md:w-full">
                <div className="bg-black-900 h-0.5 md:ml-[0] ml-[5px] w-[62%]"></div>
                <div className="bg-black-900 h-0.5 md:ml-[0] ml-[5px] mt-1 w-[62%]"></div>
                <div className="bg-black-900 h-0.5 md:ml-[0] ml-[5px] mt-1 w-[62%]"></div>
                <Img
                  className="h-[35px] md:h-auto mt-[94px] object-cover w-9 sm:w-full"
                  src="images/img_image295.png"
                  alt="image295"
                />
                <Img
                  className="h-8 md:h-auto mt-[45px] object-cover w-[33px] sm:w-full"
                  src="images/img_image298.png"
                  alt="image298"
                />
              </div>
              <Button
                className="cursor-pointer font-semibold leading-[normal] mb-[1807px] min-w-[47px] rounded-[23px] text-base text-center"
                color="blue_800"
                size="sm"
              >
                NT
              </Button>
            </div>
            <div className="absolute bg-white-A700 flex flex-col font-poppins items-center justify-start left-[19%] p-[30px] sm:px-5 rounded-[20px] shadow-bs top-[27%] w-[37%]">
              <div className="flex flex-col items-start justify-start mb-[21px] mt-24 w-[97%] md:w-full">
                <Text
                  className="text-black-900 text-xl"
                  size="txtPoppinsSemiBold20"
                >
                  First Name
                </Text>
                <Line className="bg-gray-400 h-px mt-7 w-full" />
                <Input
                  name="groupTwenty"
                  placeholder="Last Name"
                  className="font-semibold p-0 placeholder:text-black-900 sm:pr-5 text-left text-xl w-full"
                  wrapClassName="mt-[19px] pr-[35px] w-full"
                  type="text"
                ></Input>
                <Input
                  name="groupEighteen"
                  placeholder="Emai"
                  className="font-semibold p-0 placeholder:text-black-900 sm:pr-5 text-left text-xl w-full"
                  wrapClassName="mt-[18px] pr-[35px] w-full"
                ></Input>
                <div className="flex sm:flex-col flex-row sm:gap-[59px] items-start justify-between mt-[23px] w-full">
                  <div className="flex relative w-[70%] sm:w-full">
                    <CheckBox
                      className="font-semibold my-auto sm:pr-5 text-left text-xl"
                      inputClassName="border border-blue_gray-100 border-solid h-[18px] mr-[5px] w-[18px] z-[1]"
                      name="phonewithoutdia_One"
                      id="phonewithoutdia_One"
                      label="Phone (without dial code)"
                    ></CheckBox>
                    <CheckBox
                      className="ml-[-18px] mt-auto text-[15px] text-left tracking-[-0.09px] z-[1]"
                      inputClassName="border border-blue_gray-100 border-solid h-[18px] mr-[5px] w-[18px] z-[1]"
                      name="value_Six"
                      id="value_Six"
                      label="Internal"
                    ></CheckBox>
                  </div>
                  <div className="flex flex-row font-notosans gap-4 items-start justify-start sm:mt-0 mt-0.5 w-[100px]">
                    <Switch
                      onColor="#ffffff"
                      offColor="#077b2e"
                      onHandleColor="#f4f4f4"
                      offHandleColor="#ffffff"
                      value={true}
                      className="outline outline-[0.5px] outline-blue_gray-100_01 w-[49%]"
                    />
                    <Text
                      className="text-base text-gray-700 w-auto"
                      size="txtNotoSansRegular16"
                    >
                      Hide
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-400 h-px mt-[30px] w-full" />
                <div className="flex sm:flex-col flex-row sm:gap-[59px] items-start justify-between mt-6 w-full">
                  <div className="flex relative w-[70%] sm:w-full">
                    <CheckBox
                      className="font-semibold my-auto sm:pr-5 text-left text-xl"
                      inputClassName="border border-blue_gray-100 border-solid h-[18px] mr-[5px] w-[18px] z-[1]"
                      name="nationality"
                      id="nationality"
                      label="Nationality"
                    ></CheckBox>
                    <CheckBox
                      className="mb-0.5 ml-[-18px] mt-auto text-[15px] text-left tracking-[-0.09px] z-[1]"
                      inputClassName="border border-blue_gray-100 border-solid h-[18px] mr-[5px] w-[18px] z-[1]"
                      name="value_Seven"
                      id="value_Seven"
                      label="Internal"
                    ></CheckBox>
                  </div>
                  <div className="flex flex-row font-notosans gap-4 items-start justify-start w-[100px]">
                    <Switch
                      onColor="#ffffff"
                      offColor="#077b2e"
                      onHandleColor="#f4f4f4"
                      offHandleColor="#ffffff"
                      value={true}
                      className="outline outline-[0.5px] outline-blue_gray-100_01 w-[49%]"
                    />
                    <Text
                      className="text-base text-gray-700 w-auto"
                      size="txtNotoSansRegular16"
                    >
                      Hide
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-400 h-px mt-[29px] w-full" />
                <div className="flex sm:flex-col flex-row sm:gap-[59px] items-start justify-between mt-[22px] w-full">
                  <div className="flex relative w-[70%] sm:w-full">
                    <CheckBox
                      className="font-semibold my-auto sm:pr-5 text-left text-xl"
                      inputClassName="border border-blue_gray-100 border-solid h-[18px] mr-[5px] w-[18px] z-[1]"
                      name="currentresidenc_One"
                      id="currentresidenc_One"
                      label="Current Residence "
                    ></CheckBox>
                    <CheckBox
                      className="ml-[-18px] mt-auto text-[15px] text-left tracking-[-0.09px] z-[1]"
                      inputClassName="border border-blue_gray-100 border-solid h-[18px] mr-[5px] w-[18px] z-[1]"
                      name="value_Eight"
                      id="value_Eight"
                      label="Internal"
                    ></CheckBox>
                  </div>
                  <div className="flex flex-row font-notosans gap-4 items-start justify-start sm:mt-0 mt-[3px] w-[100px]">
                    <Switch
                      onColor="#ffffff"
                      offColor="#077b2e"
                      onHandleColor="#f4f4f4"
                      offHandleColor="#ffffff"
                      value={true}
                      className="outline outline-[0.5px] outline-blue_gray-100_01 w-[49%]"
                    />
                    <Text
                      className="text-base text-gray-700 w-auto"
                      size="txtNotoSansRegular16"
                    >
                      Hide
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-400 h-px mt-[37px] w-full" />
                <div className="flex sm:flex-col flex-row sm:gap-[59px] items-center justify-between mt-[22px] w-full">
                  <div className="flex relative w-[70%] sm:w-full">
                    <CheckBox
                      className="font-semibold my-auto sm:pr-5 text-left text-xl"
                      inputClassName="border border-blue_gray-100 border-solid h-[18px] mr-[5px] w-[18px] z-[1]"
                      name="idnumber"
                      id="idnumber"
                      label="ID Number"
                    ></CheckBox>
                    <CheckBox
                      className="ml-[-18px] mt-auto text-[15px] text-left tracking-[-0.09px] z-[1]"
                      inputClassName="border border-blue_gray-100 border-solid h-[18px] mr-[5px] w-[18px] z-[1]"
                      name="value_Nine"
                      id="value_Nine"
                      label="Internal"
                    ></CheckBox>
                  </div>
                  <div className="flex flex-row font-notosans gap-4 items-start justify-start w-[100px]">
                    <Switch
                      onColor="#ffffff"
                      offColor="#077b2e"
                      onHandleColor="#f4f4f4"
                      offHandleColor="#ffffff"
                      value={true}
                      className="outline outline-[0.5px] outline-blue_gray-100_01 w-[49%]"
                    />
                    <Text
                      className="text-base text-gray-700 w-auto"
                      size="txtNotoSansRegular16"
                    >
                      Hide
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-400 h-px mt-[33px] w-full" />
                <div className="flex sm:flex-col flex-row sm:gap-[59px] items-start justify-between mt-[22px] w-full">
                  <div className="flex relative w-[70%] sm:w-full">
                    <CheckBox
                      className="font-semibold my-auto sm:pr-5 text-left text-xl"
                      inputClassName="border border-blue_gray-100 border-solid h-[18px] mr-[5px] w-[18px] z-[1]"
                      name="dateofbirth"
                      id="dateofbirth"
                      label="Date of Birth "
                    ></CheckBox>
                    <CheckBox
                      className="ml-[-18px] mt-auto text-[15px] text-left tracking-[-0.09px] z-[1]"
                      inputClassName="border border-blue_gray-100 border-solid h-[18px] mr-[5px] w-[18px] z-[1]"
                      name="value_Ten"
                      id="value_Ten"
                      label="Internal"
                    ></CheckBox>
                  </div>
                  <div className="flex flex-row font-notosans gap-4 items-start justify-start sm:mt-0 mt-[3px] w-[100px]">
                    <Switch
                      onColor="#ffffff"
                      offColor="#077b2e"
                      onHandleColor="#f4f4f4"
                      offHandleColor="#ffffff"
                      value={true}
                      className="outline outline-[0.5px] outline-blue_gray-100_01 w-[49%]"
                    />
                    <Text
                      className="text-base text-gray-700 w-auto"
                      size="txtNotoSansRegular16"
                    >
                      Hide
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-400 h-px mt-10 w-full" />
                <div className="flex sm:flex-col flex-row sm:gap-[59px] items-center justify-between mt-[22px] w-full">
                  <div className="flex relative w-[70%] sm:w-full">
                    <CheckBox
                      className="font-semibold my-auto sm:pr-5 text-left text-xl"
                      inputClassName="border border-blue_gray-100 border-solid h-[18px] mr-[5px] w-[18px] z-[1]"
                      name="gender"
                      id="gender"
                      label="Gender"
                    ></CheckBox>
                    <CheckBox
                      className="ml-[-18px] mt-auto text-[15px] text-left tracking-[-0.09px] z-[1]"
                      inputClassName="border border-blue_gray-100 border-solid h-[18px] mr-[5px] w-[18px] z-[1]"
                      name="value_Eleven"
                      id="value_Eleven"
                      label="Internal"
                    ></CheckBox>
                  </div>
                  <div className="flex flex-row font-notosans gap-4 items-start justify-start w-[100px]">
                    <Switch
                      onColor="#ffffff"
                      offColor="#077b2e"
                      onHandleColor="#f4f4f4"
                      offHandleColor="#ffffff"
                      value={true}
                      className="outline outline-[0.5px] outline-blue_gray-100_01 w-[49%]"
                    />
                    <Text
                      className="text-base text-gray-700 w-auto"
                      size="txtNotoSansRegular16"
                    >
                      Hide
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-[67px] w-[31%] md:w-full">
                  <Img
                    className="h-6 w-[23px]"
                    src="images/img_plus.svg"
                    alt="plus_Three"
                  />
                  <Text
                    className="mt-0.5 text-[15px] text-black-900 tracking-[-0.09px]"
                    size="txtPoppinsSemiBold15Black900"
                  >
                    Add a question
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col font-poppins md:gap-10 gap-[67px] items-center justify-start left-[19%] top-[12%] w-[37%]">
            <div className="md:h-[404px] h-[408px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-10 sm:px-5 rounded-[20px] shadow-bs w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[210px] items-start justify-start mb-[17px] mt-[98px] p-14 md:px-10 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group14.svg')" }}
                >
                  <div className="flex flex-col items-center justify-start mb-[5px] md:ml-[0] ml-[21px] w-[84%] md:w-full">
                    <Img
                      className="h-[33px] md:h-auto object-cover w-[33px]"
                      src="images/img_image308.png"
                      alt="image308"
                    />
                    <Text
                      className="mt-[9px] text-black-900 text-sm"
                      size="txtPoppinsSemiBold14"
                    >
                      Upload cover image
                    </Text>
                    <Text
                      className="mt-1.5 text-gray-500 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      16:9 ratio is recommended. Max image size 1mb
                    </Text>
                  </div>
                </div>
              </div>
              <Text
                className="absolute bg-cyan-50 h-[77px] inset-x-[0] justify-center mx-auto pb-[13px] pl-8 pr-[35px] pt-[25px] sm:px-5 rounded-tl-[20px] rounded-tr-[20px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 top-[0] w-max"
                size="txtPoppinsSemiBold25"
              >
                Upload cover image
              </Text>
            </div>
            <Text
              className="bg-cyan-50_01 h-[93px] justify-center pl-[29px] pr-[35px] sm:px-5 py-[27px] rounded-tl-[20px] rounded-tr-[20px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-[595px]"
              size="txtPoppinsSemiBold25"
            >
              Personal Information
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameOnePage;
