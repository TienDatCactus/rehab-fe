// import React from "react";
// import { Slider, Typography, Row, Col } from "antd";
// import { ZoomIn } from "@phosphor-icons/react";

// const { Title, Text } = Typography;

// const ZoomControls = ({ zoom, setZoom, panX, setPanX, panY, setPanY }) => {
//   // Pan limits depend on zoom level (more zoom = more pan range)
//   const maxPan = Math.max(0, (zoom - 100) / 2);

//   return (
//     <div className="mb-4">
//       <Title level={5} style={{ marginBottom: 8 }}>
//         <ZoomIn size={18} style={{ marginRight: 6 }} />
//         Camera Zoom
//       </Title>

//       <div className="mb-2">
//         <div className="flex justify-between mb-1">
//           <Text type="secondary">Zoom Level: {zoom}%</Text>
//         </div>
//         <Slider min={100} max={300} value={zoom} onChange={setZoom} />
//       </div>

//       {zoom > 100 && (
//         <>
//           <div className="mb-2">
//             <div className="flex justify-between mb-1">
//               <Text type="secondary">Pan Horizontal</Text>
//             </div>
//             <Slider
//               min={-maxPan}
//               max={maxPan}
//               value={panX}
//               onChange={setPanX}
//               marks={{
//                 [(-maxPan).toFixed(0)]: "Left",
//                 0: "Center",
//                 [maxPan.toFixed(0)]: "Right",
//               }}
//             />
//           </div>

//           <div className="mb-2">
//             <div className="flex justify-between mb-1">
//               <Text type="secondary">Pan Vertical</Text>
//             </div>
//             <Slider
//               min={-maxPan}
//               max={maxPan}
//               value={panY}
//               onChange={setPanY}
//               marks={{
//                 [(-maxPan).toFixed(0)]: "Top",
//                 0: "Center",
//                 [maxPan.toFixed(0)]: "Bottom",
//               }}
//             />
//           </div>

//           <div className="mt-4 p-2 bg-gray-50 border border-gray-200 rounded text-xs">
//             <Row gutter={[8, 8]}>
//               <Col span={8}>
//                 <div
//                   className={`p-1 text-center rounded cursor-pointer ${
//                     panX === -maxPan && panY === -maxPan
//                       ? "bg-blue-100"
//                       : "hover:bg-gray-200"
//                   }`}
//                   onClick={() => {
//                     setPanX(-maxPan);
//                     setPanY(-maxPan);
//                   }}
//                 >
//                   ↖
//                 </div>
//               </Col>
//               <Col span={8}>
//                 <div
//                   className={`p-1 text-center rounded cursor-pointer ${
//                     panX === 0 && panY === -maxPan
//                       ? "bg-blue-100"
//                       : "hover:bg-gray-200"
//                   }`}
//                   onClick={() => {
//                     setPanX(0);
//                     setPanY(-maxPan);
//                   }}
//                 >
//                   ↑
//                 </div>
//               </Col>
//               <Col span={8}>
//                 <div
//                   className={`p-1 text-center rounded cursor-pointer ${
//                     panX === maxPan && panY === -maxPan
//                       ? "bg-blue-100"
//                       : "hover:bg-gray-200"
//                   }`}
//                   onClick={() => {
//                     setPanX(maxPan);
//                     setPanY(-maxPan);
//                   }}
//                 >
//                   ↗
//                 </div>
//               </Col>
//               <Col span={8}>
//                 <div
//                   className={`p-1 text-center rounded cursor-pointer ${
//                     panX === -maxPan && panY === 0
//                       ? "bg-blue-100"
//                       : "hover:bg-gray-200"
//                   }`}
//                   onClick={() => {
//                     setPanX(-maxPan);
//                     setPanY(0);
//                   }}
//                 >
//                   ←
//                 </div>
//               </Col>
//               <Col span={8}>
//                 <div
//                   className={`p-1 text-center rounded cursor-pointer ${
//                     panX === 0 && panY === 0
//                       ? "bg-blue-100"
//                       : "hover:bg-gray-200"
//                   }`}
//                   onClick={() => {
//                     setPanX(0);
//                     setPanY(0);
//                   }}
//                 >
//                   ⦿
//                 </div>
//               </Col>
//               <Col span={8}>
//                 <div
//                   className={`p-1 text-center rounded cursor-pointer ${
//                     panX === maxPan && panY === 0
//                       ? "bg-blue-100"
//                       : "hover:bg-gray-200"
//                   }`}
//                   onClick={() => {
//                     setPanX(maxPan);
//                     setPanY(0);
//                   }}
//                 >
//                   →
//                 </div>
//               </Col>
//               <Col span={8}>
//                 <div
//                   className={`p-1 text-center rounded cursor-pointer ${
//                     panX === -maxPan && panY === maxPan
//                       ? "bg-blue-100"
//                       : "hover:bg-gray-200"
//                   }`}
//                   onClick={() => {
//                     setPanX(-maxPan);
//                     setPanY(maxPan);
//                   }}
//                 >
//                   ↙
//                 </div>
//               </Col>
//               <Col span={8}>
//                 <div
//                   className={`p-1 text-center rounded cursor-pointer ${
//                     panX === 0 && panY === maxPan
//                       ? "bg-blue-100"
//                       : "hover:bg-gray-200"
//                   }`}
//                   onClick={() => {
//                     setPanX(0);
//                     setPanY(maxPan);
//                   }}
//                 >
//                   ↓
//                 </div>
//               </Col>
//               <Col span={8}>
//                 <div
//                   className={`p-1 text-center rounded cursor-pointer ${
//                     panX === maxPan && panY === maxPan
//                       ? "bg-blue-100"
//                       : "hover:bg-gray-200"
//                   }`}
//                   onClick={() => {
//                     setPanX(maxPan);
//                     setPanY(maxPan);
//                   }}
//                 >
//                   ↘
//                 </div>
//               </Col>
//             </Row>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default ZoomControls;
// import style from "antd/es/affix/style";
