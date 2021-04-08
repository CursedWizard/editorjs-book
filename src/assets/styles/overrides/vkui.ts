import { css } from 'styled-components'

export const VkUi = css`

.Tabbar {
  bottom: 10px;
  right: 7%;
  left: 7%;
  width: 86%;
  border-radius: 20px;
  box-shadow: 4px -4px 6px rgba(175, 198, 255, 0.25);
}
.PanelHeaderButton {
  color: ${({theme}) => theme.colors.blue100};
}

.Tabbar--android.Tabbar--shadow, .Tabbar--vkcom.Tabbar--shadow {
box-shadow: 0px 1px 10px 1px rgba(175, 198, 255, 0.25);

}

.Tabbar--ios.Tabbar--shadow::before {
  display: none;
}

.Panel .Panel__in, .Panel::after {
  padding-bottom: 0em;
//   background-color: ${({theme}) => theme.colors.bg}
}
`
