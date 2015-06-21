Meteor.startup(function() {
    Famous.FamousEngine = famous.core.FamousEngine;
    Famous.DOMElement = famous.domRenderables.DOMElement;
    Famous.Align = famous.components.Align;
    Famous.Camera = famous.components.Camera;
    Famous.Curves = famous.transitions.Curves;
    Famous.Node = famous.core.Node;
    Famous.Position = famous.components.Position;
    Famous.Rotation = famous.components.Rotation;
    Famous.Gravity3D = famous.physics.Gravity3D;
    Famous.Particle = famous.physics.Particle;
    Famous.Box = famous.physics.Box;
    Famous.PhysicsEngine = famous.physics.PhysicsEngine;
    Famous.Spring = famous.physics.Spring;
    Famous.Vec3 = famous.math.Vec3;
    Famous.math = famous.math;
    Famous.Physics = famous.physics;
    Famous.Mesh = famous.webglRenderables.Mesh;
    Famous.PointLight = famous.webglRenderables.PointLight;
    Famous.Color = famous.utilities.Color;
    Famous.Circle = famous.webglGeometries.Circle;
    Famous.OBJLoader = famous.webglGeometries.OBJLoader;
    Famous.Geometry = famous.webglGeometries.Geometry;
    Famous.RotationalSpring = famous.physics.RotationalSpring;
    Famous.RotationalDrag = famous.physics.RotationalDrag;
    Famous.Quaternion = famous.math.Quaternion;
    Famous.GestureHandler = famous.components.GestureHandler;
    Famous.Transitionable = famous.transitions.Transitionable;
    Famous.Opacity = famous.components.Opacity;
});
