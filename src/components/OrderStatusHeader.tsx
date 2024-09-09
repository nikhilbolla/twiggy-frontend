import { Order } from "@/types";
import { Progress } from "./ui/progress";
import { ORDER_STATUS } from "@/config/order-status-config";
import { CircleCheck } from "lucide-react";

type Props = {
  order: Order;
};

const OrderStatusHeader = ({ order }: Props) => {
  const getExpectedDelivery = () => {
    const created = new Date(order.createdAt);

    created.setMinutes(
      created.getMinutes() + order.restaurant.estimatedDeliveryTime
    );

    const hours = created.getHours();
    const minutes = created.getMinutes();

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };

  const getOrderStatusInfo = () => {
    return (
      ORDER_STATUS.find((o) => o.value === order.status) || ORDER_STATUS[0]
    );
  };

  return (
    <>
      <h1 className="text-4xl font-bold tracking-tighter flex flex-col gap-5 md:flex-row md:justify-between">
        <div className="flex justify-center items-center gap-3">
          <span> Order Status: {getOrderStatusInfo().label}</span>
          {getOrderStatusInfo().label == "Delivered" && <CircleCheck className="text-green-700 pt-1" size={30}/>}
      
        </div>

        {getOrderStatusInfo().label == "Delivered" ? (
          <></>
        ) : (
          <span> Expected by: {getExpectedDelivery()}</span>
        )}
      </h1>
      {getOrderStatusInfo().label == "Delivered" ? (
        <></>
      ) : (
        <Progress
          className="animate-pulse"
          value={getOrderStatusInfo().progressValue}
        />
      )}
    </>
  );
};

export default OrderStatusHeader;
