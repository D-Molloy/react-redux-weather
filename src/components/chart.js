import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";
import _ from "lodash";

function average(data) {
  return _.round(_.sum(data) / data.length);
}

export default props => {
  return (
    <div>
      <Sparklines height={180} width={200} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>Five-day:</div>
      <div>
        High:{" "}
        <b>
          {Math.max(...props.data)} {props.units}
        </b>
      </div>
      <div>
        Low:{" "}
        <b>
          {Math.min(...props.data)} {props.units}
        </b>
      </div>
      <div>
        Avg:{" "}
        <b>
          {average(props.data)} {props.units}
        </b>
      </div>
    </div>
  );
};
