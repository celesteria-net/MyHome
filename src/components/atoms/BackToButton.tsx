/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import { Button, IconProps, SemanticShorthandItem } from 'semantic-ui-react';

type Props = {
  icon: SemanticShorthandItem<IconProps>;
  ariaLabel: string;
  onClick?: () => void;
};
// TODO: Button.Groupを縦に並べ、Groupでbottom, right
const BackTo: FC<Props> = ({
  icon,
  ariaLabel,
  onClick = () => undefined,
}) => (
  <Button
    circular
    icon={icon}
    size="huge"
    color="grey"
    aria-label={ariaLabel}
    onClick={onClick}
    css={css`
      position: fixed;
      z-index: 5; /* position:relativeがあった際に下になってしまうので */
      opacity: 0.7;
    `}
  />
);

export default BackTo;